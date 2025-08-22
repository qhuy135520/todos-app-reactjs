import Button from '../../ui/Button'
import Form from '../../ui/Form'
import Input from '../../ui/Input'
import FormRowVertical from '../../ui/FormRowVertical'
import SpinnerMini from '../../ui/SpinnerMini'
import Select from '../../ui/Select'
import Heading from '../../ui/Heading'

import { Controller, useForm } from 'react-hook-form'
import { useUser } from '../authentication/useUser'
import { useEffect, useState } from 'react'
import { useUpdateTodos } from './useUpdateTodo'
import Checkbox from '../../ui/Checkbox'
import { useSelector } from 'react-redux'
import { selectAllCategories } from '../categories/categoriesSlice'
import supabase from '../../services/supabase'

const options = [
  { value: 'low', label: 'Low' },
  { value: 'medium', label: 'Medium' },
  { value: 'high', label: 'High' },
]

export default function UpdateTaskForm({ onCloseModal, data }) {
  const { control, register, handleSubmit, reset } = useForm()
  const { user } = useUser()
  const { isPending, updateTodoAsync } = useUpdateTodos(user?.id)

  const allCategories = useSelector(selectAllCategories)

  async function onSubmit(dataNew) {
    try {
      await updateTodoAsync({
        taskID: dataNew.id,
        data: {
          title: dataNew.title,
          description: dataNew.description,
          dueDate: dataNew.dueDate,
          priority: dataNew.priority,
          categories: dataNew.categories, 
        },
      })
      onCloseModal()
    } catch (error) {
      console.error('Lỗi khi update todo:', error.message)
    }
  }

  useEffect(() => {
    if (data) {
      reset({
        ...data,
        categories: data.categories.map((c) => c.categories.id), 
      })
    }
  }, [data, reset])
  if (!allCategories) return 'rong'
  return (
    <>
      <Heading as='h4'>Update Task</Heading>
      <Form type='regular' onSubmit={handleSubmit(onSubmit)}>
        <FormRowVertical label='Title'>
          <Input
            type='text'
            id='title'
            {...register('title', { required: 'This field is required' })}
            disabled={isPending}
          />
        </FormRowVertical>

        <FormRowVertical label='Description'>
          <Input
            type='text'
            id='description'
            {...register('description', {
              required: 'This field is required',
            })}
            disabled={isPending}
          />
        </FormRowVertical>

        <FormRowVertical label='Due Date'>
          <Input
            type='date'
            id='dueDate'
            {...register('dueDate', {
              required: 'This field is required',
            })}
            disabled={isPending}
          />
        </FormRowVertical>

        <FormRowVertical label='Priority'>
          <Controller
            name='priority'
            control={control}
            rules={{ required: 'This field is required' }}
            render={({ field }) => (
              <Select
                options={options}
                value={field.value}
                onChange={(e) => field.onChange(e.target.value)}
                type='white'
                id='priority'
                disabled={isPending}
              />
            )}
          />
        </FormRowVertical>
        <FormRowVertical label='Category'>
          <Controller
            name='categories'
            control={control}
            render={({ field }) => (
              <div>
                {allCategories.map((cat) => (
                  <Checkbox
                    key={cat.id}
                    checked={field.value?.includes(cat.id)}
                    onChange={() => {
                      const newValue = field.value?.includes(cat.id)
                        ? field.value.filter((id) => id !== cat.id)
                        : [...(field.value || []), cat.id]

                      field.onChange(newValue)
                    }}
                  >
                    {cat.name}
                  </Checkbox>
                ))}
              </div>
            )}
          />
        </FormRowVertical>

        <FormRowVertical>
          <Button $variation='primary' size='medium' disabled={isPending}>
            {isPending ? <SpinnerMini /> : 'Update'}
          </Button>
        </FormRowVertical>
      </Form>
    </>
  )
}

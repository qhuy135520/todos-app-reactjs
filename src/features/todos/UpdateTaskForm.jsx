import Button from '../../ui/Button'
import Form from '../../ui/Form'
import Input from '../../ui/Input'
import FormRowVertical from '../../ui/FormRowVertical'
import SpinnerMini from '../../ui/SpinnerMini'
import Select from '../../ui/Select'
import Heading from '../../ui/Heading'

import { Controller, useForm } from 'react-hook-form'
import { useUser } from '../authentication/useUser'
import { useEffect } from 'react'
import { useUpdateTodos } from './useUpdateTodo'

const options = [
  { value: 'low', label: 'Low' },
  { value: 'medium', label: 'Medium' },
  { value: 'high', label: 'High' },
]

export default function UpdateTaskForm({ onCloseModal, data }) {
  const { control, register, handleSubmit, reset } = useForm()
  const { user } = useUser()
  const { updateTodo, isPending } = useUpdateTodos(user?.id)

  function onSubmit(data) {
    updateTodo(
      { taskID: data.id, data },
      {
        onSuccess: () => {
          onCloseModal()
        },
      }
    )
  }

  useEffect(() => {
    reset(data)
  }, [data, reset])

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

        <FormRowVertical>
          <Button $variation='primary' size='medium' disabled={isPending}>
            {isPending ? <SpinnerMini /> : 'Update'}
          </Button>
        </FormRowVertical>
      </Form>
    </>
  )
}

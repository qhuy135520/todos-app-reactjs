import Button from '../../ui/Button'
import Form from '../../ui/Form'
import Input from '../../ui/Input'
import FormRowVertical from '../../ui/FormRowVertical'
import Select from '../../ui/Select'
import Heading from '../../ui/Heading'
import Checkbox from '../../ui/Checkbox'
import useTodos from '../../hooks/useTodos'
import LoadingComponent from '../../ui/LoadingComponent'

import { Controller } from 'react-hook-form'
import { useSelector } from 'react-redux'
import { selectAllCategories } from '../categories/categoriesSlice'
import { useState } from 'react'
import { formatISO } from 'date-fns'

const options = [
  { value: 'low', label: 'Low' },
  { value: 'medium', label: 'Medium' },
  { value: 'high', label: 'High' },
]

export default function CreateTaskForm({ onCloseModal, data = {} }) {
  const allCategories = useSelector(selectAllCategories)
  const [newData, setNewData] = useState(data)
  const {
    isPending,
    isEditSession,
    register,
    handleSubmit,
    errors,
    onSubmit,
    control,
  } = useTodos(newData)

  return (
    <LoadingComponent isLoading={isPending} error={errors}>
      <Heading as='h4'>Add new Task</Heading>
      <Form
        type={onCloseModal ? 'modal' : 'regular'}
        onSubmit={handleSubmit(async (data) => {
          await onSubmit(data)
          if (onCloseModal) onCloseModal()
        })}
      >
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
                onChange={(selected) => field.onChange(selected)}
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
                {allCategories.map(
                  (cat) =>
                    cat.isActive && (
                      <Checkbox
                        key={cat.id}
                        checked={field.value?.includes(cat.id) || false}
                        onChange={() => {
                          const newValue = field.value?.includes(cat.id)
                            ? field.value.filter((id) => id !== cat.id)
                            : [...(field.value || []), cat.id]
                          field.onChange(newValue)
                          setNewData((data) => ({
                            ...data,
                            todo_categories: newValue,
                          }))
                        }}
                      >
                        {cat.name}
                      </Checkbox>
                    )
                )}
              </div>
            )}
          />
        </FormRowVertical>

        <FormRowVertical>
          <Button
            type='submit'
            variation='primary'
            size='medium'
            disabled={isPending}
          >
            {isEditSession ? 'Update Todo' : 'Create new Todo'}
          </Button>
        </FormRowVertical>
      </Form>
    </LoadingComponent>
  )
}

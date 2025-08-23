import Button from '../../ui/Button'
import Form from '../../ui/Form'
import Input from '../../ui/Input'
import FormRowVertical from '../../ui/FormRowVertical'
import SpinnerMini from '../../ui/SpinnerMini'

import { Controller, useForm } from 'react-hook-form'
import Select from '../../ui/Select'
import { useUser } from '../authentication/useUser'
import { useAddTodo } from './useAddTodo'
import Heading from '../../ui/Heading'

const options = [
  { value: 'low', label: 'Low' },
  { value: 'medium', label: 'Medium' },
  { value: 'high', label: 'High' },
]

export default function AddTaskForm({ onCloseModal }) {
  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: '',
      description: '',
      isCompleted: false,
      dueDate: '',
      priority: 'medium',
    },
  })
  const { user } = useUser()
  const { addTodo, isPending } = useAddTodo(user?.id)

  function onSubmit(data) {
    addTodo(data, {
      onSuccess: () => {
        reset()
        onCloseModal()
      },
    })
  }

  return (
    <>
      <Heading as='h4'>Add new Task</Heading>
      <Form type='regular' onSubmit={handleSubmit(onSubmit)}>
        <FormRowVertical label='Title' error={errors?.title?.message}>
          <Input
            type='text'
            id='title'
            {...register('title', { required: 'This field is required' })}
            disabled={isPending}
          />
        </FormRowVertical>

        <FormRowVertical
          label='Description'
          error={errors?.description?.message}
        >
          <Input
            type='text'
            id='description'
            {...register('description', {
              required: 'This field is required',
            })}
            disabled={isPending}
          />
        </FormRowVertical>

        <FormRowVertical label='Due Date' error={errors?.dueDate?.message}>
          <Input
            type='date'
            id='dueDate'
            {...register('dueDate', {
              required: 'This field is required',
            })}
            disabled={isPending}
          />
        </FormRowVertical>

        <FormRowVertical label='Priority' error={errors?.priority?.message}>
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
          <Button variation='primary' size='medium' disabled={isPending}>
            {isPending ? <SpinnerMini /> : 'Add Task'}
          </Button>
        </FormRowVertical>
      </Form>
    </>
  )
}

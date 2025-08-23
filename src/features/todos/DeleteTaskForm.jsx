import Button from '../../ui/Button'
import Form from '../../ui/Form'
import FormRowVertical from '../../ui/FormRowVertical'
import SpinnerMini from '../../ui/SpinnerMini'
import Heading from '../../ui/Heading'

import { useForm } from 'react-hook-form'
import { useEffect } from 'react'
import { useDeleteTodo } from './useDeleteTodo'
import { useUser } from '../authentication/useUser'

export default function DeleteTaskForm({ onCloseModal, data }) {
  const { handleSubmit, reset } = useForm()
  const { user } = useUser()

  const { deleteTodo, isPending } = useDeleteTodo(user?.id)

  function onSubmit(data) {
    deleteTodo(data.id, {
      onSuccess: () => {
        onCloseModal()
      },
    })
  }

  useEffect(() => {
    reset(data)
  }, [data, reset])

  return (
    <>
      <Heading as='h4'>Delete Task</Heading>
      <Form type='regular' onSubmit={handleSubmit(onSubmit)}>
        <h2>
          Confirm delete <b>{data.title}</b>?
        </h2>

        <FormRowVertical>
          <Button variation='danger' size='medium' disabled={isPending}>
            {isPending ? <SpinnerMini /> : 'Delete'}
          </Button>
        </FormRowVertical>
      </Form>
    </>
  )
}

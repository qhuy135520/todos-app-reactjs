import Button from '../../ui/Button'
import Form from '../../ui/Form'
import FormRowVertical from '../../ui/FormRowVertical'
import SpinnerMini from '../../ui/SpinnerMini'
import Heading from '../../ui/Heading'

import { useUser } from '../authentication/useUser'
import { useDispatch } from 'react-redux'
import { deleteTodoSlice } from './todosSlice'
import useTodos from '../../hooks/useTodos'

export default function DeleteTaskForm({ onCloseModal, data }) {
  const dispatch = useDispatch()
  const { user } = useUser()
  const { isPending } = useTodos()

  const handleSubmit = () => {
    dispatch(deleteTodoSlice({ userID: user.id, todoID: data.id }))
    onCloseModal()
  }

  return (
    <>
      <Heading as='h4'>Delete Task #{data.title}</Heading>
      <Form type='regular' onSubmit={handleSubmit}>
        <Heading as='h5'>Confirm delete {data.title}?</Heading>

        <FormRowVertical>
          <Button variation='danger' size='medium' disabled={isPending}>
            {isPending ? <SpinnerMini /> : 'Delete'}
          </Button>
        </FormRowVertical>
      </Form>
    </>
  )
}

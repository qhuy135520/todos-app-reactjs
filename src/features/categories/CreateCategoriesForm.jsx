import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

import {
  createCategory,
  selectCategoriesStatus,
  updateCategory,
} from './categoriesSlice'

import { useUser } from '../authentication/useUser'
import FormRow from '../../ui/FormRow'
import Input from '../../ui/Input'
import Form from '../../ui/Form'
import Textarea from '../../ui/Textarea'
import Heading from '../../ui/Heading'
import Row from '../../ui/Row'
import Button from '../../ui/Button'

export default function CreateCategoriesForm({
  categoryEdit = {},
  onCloseModal,
}) {
  const dispatch = useDispatch()
  const { user } = useUser()

  const status = useSelector(selectCategoriesStatus)

  const isPending = status === 'pending'

  const { id: editId, ...editValues } = categoryEdit

  const isEditSession = Boolean(editId)

  const { register, handleSubmit, reset, formState } = useForm({
    defaultValues: isEditSession ? editValues : {},
  })

  const { errors } = formState

  function onSubmit(data) {
    if (isEditSession) {
      const dataUpdate = { ...data }
      dispatch(
        updateCategory({
          categoryId: categoryEdit.id,
          dataUpdate,
          userId: user.id,
        })
      )
      if (status === 'succeeded') toast.success('Updated Category successfully')
      if (status === 'failed') toast.success('Updated Category failed')
    } else {
      dispatch(createCategory({ ...data, userId: user.id }))
      if (status === 'succeeded') toast.success('Category created successfully')
      if (status === 'failed') toast.error('Category created Failed')
    }

    reset()
  }

  function onError() {}
  return (
    <>
      <Form
        onSubmit={handleSubmit(onSubmit, onError)}
        type={onCloseModal ? 'modal' : 'regular'}
      >
        <Row>
          <Heading as='h1'>Create a Category</Heading>
        </Row>
        <FormRow label='Category name' error={errors?.name?.message}>
          <Input
            disabled={isPending}
            type='text'
            id='name'
            {...register('name', {
              required: 'This field is required',
            })}
          />
        </FormRow>
        <FormRow label='Description' error={errors?.description?.message}>
          <Textarea
            disabled={isPending}
            type='text'
            id='description'
            defaultValue=''
            {...register('description', {
              required: 'This field is required',
            })}
          />
        </FormRow>
        <FormRow>
          <Button
            disabled={isPending}
            variation='secondary'
            type='reset'
            size='medium'
            onClick={() => onCloseModal?.()}
          >
            Cancel
          </Button>
          <Button variation='primary' size='medium' disabled={isPending}>
            Create new Category
          </Button>
        </FormRow>
      </Form>
    </>
  )
}

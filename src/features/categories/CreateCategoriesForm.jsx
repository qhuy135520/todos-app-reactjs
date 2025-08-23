import useCategories from '../../hooks/useCategories'

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
  const { isPending, isEditSession, register, handleSubmit, errors, onSubmit } =
    useCategories(categoryEdit)

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
            {isEditSession ? 'Update Category' : 'Create new Category'}
          </Button>
        </FormRow>
      </Form>
    </>
  )
}

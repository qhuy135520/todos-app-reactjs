import { useForm } from 'react-hook-form'
import Form from '../../ui/Form'
import FormRow from '../../ui/FormRow'

export default function CatogoriesForm() {
  const { register, formState, getValues, handleSubmit, reset } = useForm()
  function onSubmit() {}
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow></FormRow>
    </Form>
  )
}

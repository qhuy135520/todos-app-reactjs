import { useForm } from 'react-hook-form'
import Button from '../../ui/Button'
import Form from '../../ui/Form'
import Input from '../../ui/Input'

import FormRowVertical from '../../ui/FormRowVertical'
import { useNavigate } from 'react-router-dom'
import { useSignup } from './useSignup'
import SpinnerMini from '../../ui/SpinnerMini'

// Email regex: /\S+@\S+\.\S+/

function SignupForm() {
  const navigate = useNavigate()

  const { signup, isPending } = useSignup()
  const { register, formState, getValues, handleSubmit, reset } = useForm()
  const { errors } = formState

  function onSubmit({ fullName, email, password }) {
    signup(
      { fullName, email, password },
      {
        onSettled: () => {
          reset()
        },
      }
    )
  }
  return (
    <Form type='regular' onSubmit={handleSubmit(onSubmit)}>
      <FormRowVertical label='Full name' error={errors?.fullName?.message}>
        <Input
          type='text'
          id='fullName'
          disabled={isPending}
          {...register('fullName', { required: 'This field is required' })}
        />
      </FormRowVertical>

      <FormRowVertical label='Email address' error={errors?.email?.message}>
        <Input
          type='email'
          id='email'
          disabled={isPending}
          {...register('email', {
            required: 'This field is required',
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: 'Please provide a valid Email address',
            },
          })}
        />
      </FormRowVertical>

      <FormRowVertical
        label='Password (min 8 characters)'
        error={errors?.password?.message}
      >
        <Input
          type='password'
          id='password'
          disabled={isPending}
          {...register('password', {
            required: 'This field is required',
            minLength: {
              value: 8,
              message: 'Password needs a minimum of 8 characters',
            },
          })}
        />
      </FormRowVertical>

      <FormRowVertical
        label='Repeat password'
        error={errors?.passwordConfirm?.message}
      >
        <Input
          type='password'
          id='passwordConfirm'
          disabled={isPending}
          {...register('passwordConfirm', {
            required: 'This field is required',
            validate: (value) =>
              Number(value) === Number(getValues().password) ||
              'Passwords need to match',
          })}
        />
      </FormRowVertical>

      <FormRowVertical>
        {/* type is an HTML attribute! */}

        <Button variation='primary' size='medium' disabled={isPending}>
          Create new user
        </Button>

        <Button
          type='button'
          variation='danger'
          size='large'
          disabled={isPending}
          onClick={() => navigate('/login')}
        >
          {!isPending ? (
            <span>
              Already have an account? <strong>Login</strong>
            </span>
          ) : (
            <SpinnerMini />
          )}
        </Button>
      </FormRowVertical>
    </Form>
  )
}

export default SignupForm

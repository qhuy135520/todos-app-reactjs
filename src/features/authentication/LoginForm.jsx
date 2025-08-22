import { useState } from 'react'
import Button from '../../ui/Button'
import Form from '../../ui/Form'
import Input from '../../ui/Input'
import FormRowVertical from '../../ui/FormRowVertical'
import { useLogin } from './useLogin'
import SpinnerMini from '../../ui/SpinnerMini'
import { useNavigate } from 'react-router-dom'

function LoginForm() {
  const navigate = useNavigate()

  const [email, setEmail] = useState('lehuy@example.com')
  const [password, setPassword] = useState('123123123')
  const { login, isPending } = useLogin()

  function handleSubmit(e) {
    e.preventDefault()

    if (!email || !password) return

    login(
      { email, password },
      {
        onSettled: () => {
          setEmail('')
          setPassword('')
        },
      }
    )
  }

  return (
    <Form type='regular' onSubmit={handleSubmit}>
      <FormRowVertical label='Email address'>
        <Input
          type='email'
          id='email'
          autoComplete='username'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isPending}
        />
      </FormRowVertical>
      <FormRowVertical label='Password'>
        <Input
          type='password'
          id='password'
          autoComplete='current-password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={isPending}
        />
      </FormRowVertical>
      <FormRowVertical>
        <Button $variation='primary' size='large' disabled={isPending}>
          {!isPending ? 'Login' : <SpinnerMini />}
        </Button>
        <Button
          type='button'
          $variation='danger'
          size='large'
          disabled={isPending}
          onClick={() => navigate('/signup')}
        >
          {!isPending ? (
            <span>
              New to Todos? <strong>Create an account</strong>
            </span>
          ) : (
            <SpinnerMini />
          )}
        </Button>
      </FormRowVertical>
    </Form>
  )
}

export default LoginForm

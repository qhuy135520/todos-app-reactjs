import styled from 'styled-components'
import LoginForm from '../features/authentication/LoginForm'
import Logo from '../ui/Logo'
import Heading from '../ui/Heading'

const LoginLayout = styled.main`
  min-height: 100vh;
  display: grid;
  align-content: center;
  justify-content: center;
  gap: 3.2rem;
  background-color: var(--color-grey-50);
  @media (max-width: 431px) {
    width: 100%;
  }
`

function Login() {
  return (
    <LoginLayout>
      <Logo />
      <Heading as='h4'>Login to your account</Heading>
      <LoginForm />
    </LoginLayout>
  )
}

export default Login

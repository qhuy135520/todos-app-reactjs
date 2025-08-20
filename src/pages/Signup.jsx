import React from 'react'
import SignupForm from '../features/authentication/SignupForm'
import styled from 'styled-components'
import Logo from '../ui/Logo'
import Heading from '../ui/Heading'

const SignupLayout = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 48rem;
  align-content: center;
  justify-content: center;
  gap: 3.2rem;
  background-color: var(--color-grey-50);
`

export default function Signup() {
  return (
    <SignupLayout>
      <Logo />
      <Heading as='h4'>Create an account</Heading>
      <SignupForm />
    </SignupLayout>
  )
}

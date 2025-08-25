import styled from 'styled-components'
import UpdatePasswordForm from '../features/authentication/UpdatePasswordForm'
import UpdateUserDataForm from '../features/authentication/UpdateUserDataForm'
import Heading from '../ui/Heading'
import Row from '../ui/Row'

const StyleUserForm = styled.div`
  width: 80%;
  margin: 0 auto;
  @media (max-width: 431px) {
    width: 100%;
  }
`

const StyleUserWrapper = styled.div`
  width: 80%;
  margin: auto;
  @media (max-width: 560px) {
    width: 95%;
  }
`

function Account() {
  return (
    <>
      <Heading as='h1'>Update your account</Heading>

      <Row type='vertical'>
        <StyleUserWrapper>
          <Heading as='h3'>Update user data</Heading>
          <StyleUserForm>
            <UpdateUserDataForm />
          </StyleUserForm>
        </StyleUserWrapper>
      </Row>

      <Row type='vertical'>
        <StyleUserWrapper>
          <Heading as='h3'>Update password</Heading>
          <StyleUserForm>
            <UpdatePasswordForm />
          </StyleUserForm>
        </StyleUserWrapper>
      </Row>
    </>
  )
}

export default Account

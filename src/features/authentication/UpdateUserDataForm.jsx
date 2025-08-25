import { useState } from 'react'

import Button from '../../ui/Button'
import FileInput from '../../ui/FileInput'
import Form from '../../ui/Form'
import FormRow from '../../ui/FormRow'
import Input from '../../ui/Input'

import { useUser } from './useUser'
import { useUpdateUser } from './useUpdateUser'
import Logo from '../../ui/Logo'
import FormRowVertical from '../../ui/FormRowVertical'
import styled from 'styled-components'

const InputCustom = styled.div`
  border: 1px solid var(--color-grey-300);
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-sm);
  padding: 0.8rem 1.2rem;
  box-shadow: var(--shadow-sm);
  @media (max-width: 1367px) {
    width: 50%;
  }
`

function UpdateUserDataForm() {
  const { updateUser, isUpdating } = useUpdateUser()

  const {
    user: {
      email,
      user_metadata: { fullName: currentFullName },
    },
  } = useUser()

  const [fullName, setFullName] = useState(currentFullName)
  const [avatar, setAvatar] = useState(null)

  function handleSubmit(e) {
    e.preventDefault()
    if (!fullName) return

    updateUser(
      { fullName, avatar },
      {
        onSuccess: () => {
          setAvatar(null)
          e.target.reset()
        },
      }
    )
  }

  function handleCancel() {
    setFullName(currentFullName)
    setAvatar(null)
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <FormRowVertical label='Email address'>
          <Input value={email} disabled />
        </FormRowVertical>
        <FormRowVertical label='Full name'>
          <Input
            type='text'
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            id='fullName'
            disabled={isUpdating}
          />
        </FormRowVertical>
        <FormRowVertical label='Avatar image'>
          <FileInput
            id='avatar'
            accept='image/*'
            onChange={(e) => setAvatar(e.target.files[0])}
            disabled={isUpdating}
          />
        </FormRowVertical>
        <FormRow>
          <Button
            type='reset'
            variation='secondary'
            size='medium'
            disabled={isUpdating}
            onClick={handleCancel}
          >
            Cancel
          </Button>
          <Button variation='primary' size='medium' disabled={isUpdating}>
            Update account
          </Button>
        </FormRow>
      </Form>
    </>
  )
}

export default UpdateUserDataForm

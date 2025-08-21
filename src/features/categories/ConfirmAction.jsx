import styled from 'styled-components'
import Button from '../../ui/Button'
import Heading from '../../ui/Heading'
import Tag from '../../ui/Tag'

const StyledConfirmAction = styled.div`
  width: 40rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  & p {
    color: var(--color-grey-500);
    margin-bottom: 1.2rem;
  }

  & div {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`

function ConfirmAction({
  resourceName,
  onConfirm,
  disabled,
  onCloseModal,
  action,
  type,
}) {
  return (
    <StyledConfirmAction>
      <Heading as='h3'>Delete {resourceName}</Heading>
      <p>
        Are you sure you want to <Tag type={type}>{action.toUpperCase()}</Tag>{' '}
        this {resourceName} permanently?
      </p>

      <div>
        <Button
          variation='secondary'
          size='medium'
          disabled={disabled}
          onClick={onCloseModal}
        >
          Cancel
        </Button>
        <Button
          variation={type === 'red' ? 'danger' : 'primary'}
          size='medium'
          disabled={disabled}
          onClick={onConfirm}
        >
          {action}
        </Button>
      </div>
    </StyledConfirmAction>
  )
}

export default ConfirmAction

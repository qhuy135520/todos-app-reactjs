import styled from 'styled-components'
import Logout from '../features/authentication/Logout'
import HeaderMenu from './HeaderMenu'
import UserAvatar from '../features/authentication/UserAvatar'

const StyledHeader = styled.header`
  position: fixed;
  width: 100%;
  background-color: var(--color-grey-0);
  padding: 1.4rem 4.8rem;
  border-bottom: 1px solid var(--color-grey-100);
  display: flex;
  gap: 2.4rem;
  align-items: center;
  justify-content: flex-end;
  z-index: 100;

  @media (max-width: 476px) {
    flex-direction: column;
  }
`

export default function Header() {
  return (
    <StyledHeader>
      <UserAvatar />
      <HeaderMenu />
    </StyledHeader>
  )
}

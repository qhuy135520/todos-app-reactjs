import { useState } from 'react'
import styled from 'styled-components'
import Logo from './Logo'
import MainNav from './MainNav'
import { Menu, X } from 'lucide-react'

const StyledSidebar = styled.aside`
  background-color: var(--color-grey-0);
  padding: 3.2rem 2.4rem;
  border-right: 1px solid var(--color-grey-100);
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  z-index: 1001;
  transition: transform 0.3s ease-in-out;

  @media (min-width: 768px) {
    position: static;
    grid-column: 1/2;
    grid-row: 1/-1;
    transform: translateX(0);
  }

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 240px;
    transform: ${({ $open }) =>
      $open ? 'translateX(0)' : 'translateX(-100%)'};
  }
`

const ToggleButton = styled.button`
  position: fixed;
  top: 1.2rem;
  left: 1.2rem;
  background: var(--color-brand-500);
  color: #fff;
  border: none;
  padding: 0.8rem;
  border-radius: 50%;
  z-index: 1100;
  cursor: pointer;

  &:hover {
    background: var(--color-brand-600);
  }

  @media (min-width: 769px) {
    display: none;
  }
`

const Overlay = styled.div`
  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    z-index: 1000;
    opacity: ${({ $open }) => ($open ? '1' : '0')};
    visibility: ${({ $open }) => ($open ? 'visible' : 'hidden')};
    transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
  }
`

export default function Sidebar() {
  const [open, setOpen] = useState(false)

  const toggleSidebar = () => setOpen((prev) => !prev)
  const closeSidebar = () => setOpen(false)

  return (
    <>
      <ToggleButton onClick={toggleSidebar}>
        {open ? <X size={20} /> : <Menu size={20} />}
      </ToggleButton>

      <Overlay $open={open} onClick={closeSidebar} />

      <StyledSidebar $open={open}>
        <Logo />
        <MainNav />
      </StyledSidebar>
    </>
  )
}

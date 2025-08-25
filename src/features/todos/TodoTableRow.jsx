import { createContext, useContext } from 'react'
import styled from 'styled-components'

const StyledTable = styled.div`
  border: 1px solid var(--color-grey-200);
  min-width: 100%;
  width: 100%;
  font-size: 1.4rem;
  background-color: var(--color-grey-0);
  border-radius: 7px;
  overflow: hidden;

  @media (max-width: 1068px) {
    background: none;
    border: none;
    border-radius: 0;
  }
`

const CommonRow = styled.div`
  display: grid;
  grid-template-columns: ${(props) => props.$columns};
  column-gap: 2.4rem;
  align-items: center;
  transition: none;

  @media (max-width: 1068px) {
    grid-template-columns: 1fr;
    row-gap: 0.8rem;
    padding: 1.2rem;
    border-bottom: 1px solid var(--color-grey-100);
  }
`
const StyledHeader = styled(CommonRow)`
  padding: 1.6rem 2.4rem;
  background-color: var(--color-grey-50);
  border-bottom: 1px solid var(--color-grey-100);
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  color: var(--color-grey-600);

  @media (max-width: 1068px) {
    display: none;
  }
`

const StyledRow = styled(CommonRow)`
  padding: 1.2rem 2.4rem;
  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }

  ${({ $completed }) => $completed && `color: var(--color-red-700);`}

  @media (max-width: 1068px) {
    background: var(--color-grey-200);
    margin-bottom: 1rem;
    border-radius: 7px;
    padding: 1.6rem;
  }
`

const StyledBody = styled.section`
  margin: 0.4rem 0;
`

const Footer = styled.footer`
  background-color: var(--color-grey-50);
  display: flex;
  justify-content: center;
  padding: 1.2rem;

  &:not(:has(*)) {
    display: none;
  }
`

const Empty = styled.p`
  font-size: 1.6rem;
  font-weight: 500;
  text-align: center;
  margin: 2.4rem;
`

const TodoTableRowContext = createContext()

function TodoTableRow({ columns, children }) {
  return (
    <TodoTableRowContext.Provider value={{ columns }}>
      <StyledTable role='table'>{children}</StyledTable>
    </TodoTableRowContext.Provider>
  )
}

function Header({ children }) {
  const { columns } = useContext(TodoTableRowContext)
  return (
    <StyledHeader role='row' $columns={columns} as='header'>
      {children}
    </StyledHeader>
  )
}
function Row({ children, completed }) {
  const { columns } = useContext(TodoTableRowContext)
  return (
    <StyledRow role='row' $columns={columns} $completed={completed}>
      {children}
    </StyledRow>
  )
}

function Body({ data, render }) {
  if (!data.length || false) return <Empty>No data to show at the moment</Empty>

  return <StyledBody>{data.map(render)}</StyledBody>
}

TodoTableRow.Header = Header
TodoTableRow.Row = Row
TodoTableRow.Body = Body
TodoTableRow.Footer = Footer

export default TodoTableRow

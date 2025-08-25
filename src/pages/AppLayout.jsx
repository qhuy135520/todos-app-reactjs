import { Outlet } from 'react-router-dom'
import Sidebar from '../ui/Sidebar'
import Header from '../ui/Header'
import styled from 'styled-components'
import { useUser } from '../features/authentication/useUser'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { fetchCategories } from '../features/categories/categoriesSlice'
import { fetchTodosSlice } from '../features/todos/todosSlice'

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 26rem 1fr;
  grid-template-rows: auto 1fr;
  min-height: 100vh;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    
  }
`

const Main = styled.main`
  margin-top: 50px;
  min-height: 100vh;
  background-color: var(--color-grey-50);
  padding: 4rem 3rem 6.4rem;
  grid-column: 2/-1;

  @media (max-width: 768px) {
    padding: 2rem;
    padding-top: 3rem;
    grid-column: 1;
  }
  @media (max-width: 476px) {
    margin-top: 120px;
  }
`
const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`

export default function AppLayout() {
  const { user } = useUser()
  const dispatch = useDispatch()

  useEffect(() => {
    if (!user) return
    dispatch(fetchCategories(user.id))
    dispatch(fetchTodosSlice(user.id))
  }, [user])

  return (
    <StyledAppLayout>
      <Header />
      <Sidebar />
      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
    </StyledAppLayout>
  )
}

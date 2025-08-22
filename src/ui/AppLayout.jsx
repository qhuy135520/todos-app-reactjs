import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import Header from './Header'
import styled from 'styled-components'
import { useUser } from '../features/authentication/useUser'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { fetchCategories } from '../features/categories/categoriesSlice'

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 26rem 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;
`

const Main = styled.main`
  background-color: var(--color-grey-50);
  padding: 4rem 4.8rem 6.4rem;
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

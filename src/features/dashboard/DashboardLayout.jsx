import styled from 'styled-components'
import Stats from './Stats'
import SalesChart from './SalesChart'
import DurationChart from './DurationChart'
import TodayActivity from './TodayActivity'
import { useGetTodos } from '../todos/useGetTodos'
import { useUser } from '../authentication/useUser'
import Spinner from '../../ui/Spinner'
import DashBoardDistribution from './DashBoardDistribution'
import DashBoardProgress from './DashBoardProgress'

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 2.4rem;
`

function DashBoardLayout() {
  const { user, isPending } = useUser()
  const {
    data: todos = [],
    isPending: isPendingTodos,
    error,
  } = useGetTodos(user?.id)

  if (isPendingTodos) return <Spinner />

  return (
    <StyledDashboardLayout>
      <Stats todos={todos} />
      <DashBoardDistribution />
      <DurationChart />
      <DashBoardProgress />
      <SalesChart />
    </StyledDashboardLayout>
  )
}

export default DashBoardLayout

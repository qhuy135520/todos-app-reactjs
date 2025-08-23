import styled from 'styled-components'
import Stats from './Stats'
import { useGetTodos } from '../todos/useGetTodos'
import { useUser } from '../authentication/useUser'
import Spinner from '../../ui/Spinner'
import DashBoardDistribution from './DashBoardDistribution'
import DashBoardProgress from './DashBoardProgress'
import PriorityRadialChart from './PriorityRadialChart'
import KanbanBoard from './KanbanBoard'
import DashboardProgressOverTime from './DashboardProgressOverTime'

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
  console.log(todos)

  return (
    <>
      <StyledDashboardLayout>
        <Stats todos={todos} />
        <DashBoardDistribution todos={todos} />
        <PriorityRadialChart todos={todos} />
        <DashBoardProgress todos={todos} />
        <DashboardProgressOverTime todos={todos} />
        <KanbanBoard todos={todos} userId={user.id} />
      </StyledDashboardLayout>
    </>
  )
}

export default DashBoardLayout

import styled from 'styled-components'
import Stats from './Stats'
import { useGetTodos } from '../todos/useGetTodos'
import { useUser } from '../authentication/useUser'
import DashBoardDistribution from './DashBoardDistribution'
import DashBoardProgress from './DashBoardProgress'
import PriorityRadialChart from './PriorityRadialChart'
import KanbanBoard from './KanbanBoard'
import DashboardProgressOverTime from './DashboardProgressOverTime'
import LoadingComponent from '../../ui/LoadingComponent'

const StyledDashboardLayout = styled.div`
  display: grid;
  gap: 2.4rem;
  padding: 1.6rem;

  grid-template-columns: repeat(4, 1fr);

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    padding: 0;
    grid-template-columns: 1fr;
    gap: 1.6rem;
  }
`

function DashBoardLayout() {
  const { user, isPending } = useUser()
  const {
    data: todos = [],
    isPending: isPendingTodos,
    error,
  } = useGetTodos(user?.id)

  return (
    <LoadingComponent isLoading={isPending || isPendingTodos} error={error}>
      <StyledDashboardLayout>
        <Stats todos={todos} />
        <DashBoardDistribution todos={todos} />
        <PriorityRadialChart todos={todos} />
        <DashBoardProgress todos={todos} />
        <DashboardProgressOverTime todos={todos} />
        <KanbanBoard todos={todos} userId={user.id} />
      </StyledDashboardLayout>
    </LoadingComponent>
  )
}

export default DashBoardLayout

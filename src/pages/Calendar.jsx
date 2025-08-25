import { Badge, Space } from 'antd'
import { useUser } from '../features/authentication/useUser'
import WorkSchedule from '../features/calendar/WorkSchedule'
import Heading from '../ui/Heading'
import Row from '../ui/Row'
import LoadingComponent from '../ui/LoadingComponent'
import useTodos from '../hooks/useTodos'

export default function Calendar() {
  const { user } = useUser()
  const { isPending, todos, error } = useTodos()

  return (
    <LoadingComponent isLoading={isPending} error={error}>
      <Row type='vertical'>
        <Row type='horizontal'>
          <Heading>Work Schedule</Heading>
          <Space>
            <Badge
              status='success'
              text='Completed'
              style={{ color: 'var(--color-grey-900)' }}
            />
            <Badge
              status='warning'
              text='Unfinished'
              style={{ color: 'var(--color-grey-900)' }}
            />
          </Space>
        </Row>
        <WorkSchedule todos={todos} />
        <Row type='horizontal'>
          {/* <UpcomingEvent />
          <MonthlyStatistics /> */}
        </Row>
      </Row>
    </LoadingComponent>
  )
}

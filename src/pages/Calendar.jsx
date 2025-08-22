import { Badge, Space } from 'antd'
import { useUser } from '../features/authentication/useUser'
import WorkSchedule from '../features/calendar/WorkSchedule'
import { useGetTodos } from '../features/todos/useGetTodos'
import Heading from '../ui/Heading'
import Row from '../ui/Row'
import Spinner from '../ui/Spinner'
import MonthlyStatistics from '../features/calendar/MonthlyStatistics'
import UpcomingEvent from '../features/calendar/UpcomingEvent'

export default function Calendar() {
  const { user } = useUser()
  const { isPending, data: todos, error } = useGetTodos(user.id)

  if (isPending) return <Spinner />

  return (
    <>
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
    </>
  )
}

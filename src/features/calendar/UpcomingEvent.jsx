import { Card } from 'antd'
import Heading from '../../ui/Heading'

export default function UpcomingEvent() {
  return (
    <Card
      title={<Heading as='h2'>Upcoming Events</Heading>}
      variant='borderless'
      style={{ width: '100%' }}
    >
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>
  )
}

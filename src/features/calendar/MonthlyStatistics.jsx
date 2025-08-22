import { Badge, Card, Row, Space } from 'antd'
import Heading from '../../ui/Heading'
import Stat from '../dashboard/Stat'
import { GiFinishLine } from 'react-icons/gi'

export default function MonthlyStatistics() {
  return (
    <Card
      title={<Heading as='h2'>Monthly Statistics</Heading>}
      variant='borderless'
      style={{ width: '100%' }}
    >
      <Space direction='vertical' size='middle' style={{ width: '100%' }}>
        <Badge.Ribbon text='Finished' color='green'>
          <Card title='Pushes open the window' size='small'>
            and raises the spyglass.
          </Card>
        </Badge.Ribbon>
        <Badge.Ribbon text='Working' color='blue'>
          <Card title='Pushes open the window' size='small'>
            and raises the spyglass.
          </Card>
        </Badge.Ribbon>
        <Badge.Ribbon text='Overdue' color='yellow'>
          <Card title='Pushes open the window' size='small'>
            and raises the spyglass.
          </Card>
        </Badge.Ribbon>
      </Space>
    </Card>
  )
}

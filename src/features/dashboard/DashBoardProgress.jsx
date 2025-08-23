import { Card, Col, ConfigProvider, Progress } from 'antd'
import styled from 'styled-components'
import Tag from '../../ui/Tag'
import Heading from '../../ui/Heading'
import Row from '../../ui/Row'

const StyledDistribution = styled.div`
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
  color: 'var(--color-grey-900)';
  padding: 2.4rem 3.2rem;
  grid-column: 1/-1;
`

export default function DashBoardProgress({ todos }) {
  const totalWork = todos.length

  const totalWorkHigh = todos.filter((todo) => todo.priority === 'high').length
  const totalWorkMedium = todos.filter(
    (todo) => todo.priority === 'medium'
  ).length
  const totalWorkLow = todos.filter((todo) => todo.priority === 'low').length

  return (
    <ConfigProvider
      theme={{
        components: {
          Card: {
            colorBgContainer: 'var(--color-grey-0)',
            colorTextHeading: 'var(--color-grey-900)',
            colorText: 'var(--color-grey-900)',
          },
        },
      }}
    >
      <StyledDistribution>
        <Card
          title={<Heading as='h2'>Prioritization</Heading>}
          variant='borderless'
        >
          <Row type='horizontal'>
            <Tag type='red'>High</Tag>
            <Heading as='h5'>{totalWorkHigh} tasks</Heading>
          </Row>
          <Progress
            percent={(totalWorkHigh / totalWork) * 100}
            strokeColor='red'
            trailColor='var(--color-grey-300)'
          />
          <Row type='horizontal'>
            <Tag type='yellow'>Medium</Tag>
            <Heading as='h5'>{totalWorkMedium} tasks</Heading>
          </Row>
          <Progress
            percent={(totalWorkMedium / totalWork) * 100}
            strokeColor='#fef9c3'
            trailColor='var(--color-grey-300)'
          />
          <Row type='horizontal'>
            <Tag type='green'>Low</Tag>
            <Heading as='h5'>{totalWorkLow} tasks</Heading>
          </Row>
          <Progress
            percent={(totalWorkLow / totalWork) * 100}
            strokeColor='#52c41a'
            trailColor='var(--color-grey-300)'
          />
        </Card>
      </StyledDistribution>
    </ConfigProvider>
  )
}

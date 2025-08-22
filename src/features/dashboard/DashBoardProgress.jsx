import { Card, Col, ConfigProvider, Progress, Row } from 'antd'
import styled from 'styled-components'
import Tag from '../../ui/Tag'
import Heading from '../../ui/Heading'

const StyledDistribution = styled.div`
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
  color: 'var(--color-grey-900)';
  padding: 2.4rem 3.2rem;
  grid-column: 1/-1;
`

export default function DashBoardProgress() {
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
          <Tag type='red'>High</Tag>
          <Progress percent={70} strokeColor='red' />
          <Tag type='yellow'>Medium</Tag>
          <Progress percent={20} strokeColor='#fef9c3' />
          <Tag type='green'>Low</Tag>
          <Progress percent={50} showInfo={false} />
        </Card>
      </StyledDistribution>
    </ConfigProvider>
  )
}

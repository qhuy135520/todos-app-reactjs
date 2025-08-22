import { Alert, Card, Col, ConfigProvider, Row } from 'antd'
import styled from 'styled-components'
import Heading from '../../ui/Heading'

const StyledDistribution = styled.div`
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
  color: 'var(--color-grey-900)';
  padding: 2.4rem 3.2rem;
  grid-column: 1 / span 2;
`

const Stacked = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;

  & span:first-child {
    font-weight: 500;
  }

  & span:last-child {
    color: var(--color-grey-500);
    font-size: 1.2rem;
  }
`

export default function DashBoardDistribution() {
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
          title={<Heading as='h2'>Deadline is coming</Heading>}
          variant='borderless'
        >
          <Alert
            message='Success Text'
            description='Success Description '
            type='success'
          />
          <br />
          <Alert message='Warning Text' description='Warning ' type='warning' />
          <br />
          <Alert
            message='Error Text'
            description='Error Description '
            type='error'
          />
        </Card>
      </StyledDistribution>
    </ConfigProvider>
  )
}

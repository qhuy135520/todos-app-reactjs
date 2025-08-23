import { Alert, Card, Col, ConfigProvider, Row } from 'antd'
import styled from 'styled-components'
import Heading from '../../ui/Heading'
import { format } from 'date-fns'

const StyledDistribution = styled.div`
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
  padding: 2.4rem 3.2rem;
  grid-column: span 2;

  @media (max-width: 1200px) {
    grid-column: span 2;
  }

  @media (max-width: 768px) {
    grid-column: span 1;
    padding: 1.6rem 2rem;
  }
`

export default function DashBoardDistribution({ todos }) {
  const today = new Date()

  const closestPastTodos = todos
    .filter((todo) => new Date(todo.dueDate) <= today)
    .map((todo) => ({
      ...todo,
      diff: Math.abs(today - new Date(todo.dueDate)),
    }))
    .sort((a, b) => a.diff - b.diff)
    .slice(0, 3)

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
          {closestPastTodos.map((item, index) => {
            return (
              <div key={index}>
                <Alert
                  message={<strong>{item.title}</strong>}
                  description={
                    <span>
                      <strong>Due Date</strong>:{' '}
                      {format(item.dueDate, 'MMM dd yyyy')}
                    </span>
                  }
                  type={`${
                    item.priority === 'high'
                      ? 'error'
                      : item.priority === 'medium'
                      ? 'warning'
                      : 'success'
                  }`}
                  style={{
                    backgroundColor:
                      item.priority === 'high'
                        ? 'var(--color-red-100)'
                        : item.priority === 'medium'
                        ? 'var(--color-yellow-100)'
                        : 'var(--color-green-100)',
                    border: '1px solid #ccc',
                    color: '#333',
                    fontWeight: 500,
                  }}
                />
                <br />
              </div>
            )
          })}
        </Card>
      </StyledDistribution>
    </ConfigProvider>
  )
}

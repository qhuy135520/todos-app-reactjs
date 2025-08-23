import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Legend,
} from 'recharts'
import styled from 'styled-components'

const StyledProgressOverTime = styled.div`
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
  color: 'var(--color-grey-900)';
  padding: 2.4rem 3.2rem;
  grid-column: 1/-1;

  @media (max-width: 1200px) {
    grid-column: span 2;
    padding: 2rem;
  }

  @media (max-width: 768px) {
    grid-column: span 1;
    padding: 1.6rem;
  }
`

const groupTasksByDate = (tasks) => {
  const map = {}
  tasks.forEach((task) => {
    const date = task.dueDate
    if (!map[date]) {
      map[date] = { date, completed: 0, total: 0 }
    }
    map[date].total += 1
    if (task.isCompleted) {
      map[date].completed += 1
    }
  })

  return Object.values(map).sort((a, b) => new Date(a.date) - new Date(b.date))
}

export default function DashboardProgressOverTime({ todos: tasks }) {
  const data = groupTasksByDate(tasks)

  return (
    <StyledProgressOverTime>
      <div style={{ width: '100%', height: 400 }}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>
          📈 Progress Over Time
        </h2>
        <ResponsiveContainer width='100%' height='100%'>
          <LineChart data={data}>
            <defs>
              <linearGradient id='lineGradient' x1='0' y1='0' x2='0' y2='1'>
                <stop offset='0%' stopColor='#4facfe' stopOpacity={1} />
                <stop offset='100%' stopColor='#00f2fe' stopOpacity={0.3} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray='3 3' stroke='#e0e0e0' />
            <XAxis dataKey='date' />
            <YAxis />
            <Tooltip
              contentStyle={{
                background: '#333',
                color: '#fff',
                borderRadius: 8,
              }}
            />
            <Legend />
            <Line
              type='monotone'
              dataKey='completed'
              stroke='url(#lineGradient)'
              strokeWidth={3}
              dot={{ r: 5 }}
              activeDot={{ r: 7 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </StyledProgressOverTime>
  )
}

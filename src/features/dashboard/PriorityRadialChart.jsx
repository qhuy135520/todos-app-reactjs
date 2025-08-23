import styled from 'styled-components'
import {
  RadialBarChart,
  RadialBar,
  Legend,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'
import Heading from '../../ui/Heading'

const ChartBox = styled.div`
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
  padding: 2.4rem 3.2rem;
  grid-column: 3/-1;

  & > *:first-child {
    margin-bottom: 1.6rem;
  }
`

export default function PriorityRadialChart({ todos }) {
  const totalWorkHigh = todos.filter((todo) => todo.priority === 'high').length
  const totalWorkMedium = todos.filter(
    (todo) => todo.priority === 'medium'
  ).length
  const totalWorkLow = todos.filter((todo) => todo.priority === 'low').length

  const data = [
    { name: 'Low', value: totalWorkLow, fill: '#82ca9d' },
    { name: 'Medium', value: totalWorkMedium, fill: '#ffc658' },
    { name: 'High', value: totalWorkHigh, fill: '#ff4d4f' },
    { name: 'Total', value: todos.length, fill: '#0369a1' },
  ]

  return (
    <ChartBox>
      <Heading as='h2'>Priority Summary</Heading>
      <ResponsiveContainer width='100%' height={240}>
        <RadialBarChart
          cx='40%'
          cy='50%'
          innerRadius={40}
          outerRadius={110}
          barSize={10}
          data={data}
        >
          <RadialBar
            minAngle={15}
            background
            clockWise
            dataKey='value'
            cornerRadius={5}
            label={{ position: 'insideStart', fill: '#000', fontSize: 12 }}
          />
          <Legend
            verticalAlign='middle'
            align='right'
            width='30%'
            layout='vertical'
            iconSize={15}
            iconType='circle'
          />
          <Tooltip
            content={({ active, payload }) => {
              if (active && payload && payload.length) {
                const { name, value } = payload[0].payload
                return (
                  <div
                    style={{
                      background: '#fff',
                      border: '1px solid #ccc',
                      padding: '5px 10px',
                      borderRadius: '4px',
                    }}
                  >
                    <p style={{ margin: 0, fontWeight: 'bold' }}>{name}</p>
                    <p style={{ margin: 0 }}>{value} tasks</p>
                  </div>
                )
              }
              return null
            }}
          />
        </RadialBarChart>
      </ResponsiveContainer>
    </ChartBox>
  )
}

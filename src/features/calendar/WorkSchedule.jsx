import { Badge, Calendar, ConfigProvider } from 'antd'
import dayjs from 'dayjs'
import Tag from '../../ui/Tag'

const WorkSchedule = ({ todos }) => {
  const getListData = (value) => {
    return todos
      .filter((todo) => dayjs(todo.dueDate).isSame(value, 'day'))
      .map((todo) => ({
        type: todo.isCompleted ? 'success' : 'warning',
        content: todo.title,
      }))
  }

  const dateCellRender = (value) => {
    const listData = getListData(value)
    return (
      <ul className='events'>
        {listData.map((item, index) => (
          <li key={index}>
            <Badge status={item.type} text={item.content} />
          </li>
        ))}
      </ul>
    )
  }

  const monthCellRender = (value) => {
    const count = todos.filter((todo) =>
      dayjs(todo.dueDate).isSame(value, 'month')
    ).length
    return count > 0 ? (
      <div className='notes-month'>
        <Tag type='blue'>{count} Tasks this month</Tag>
      </div>
    ) : null
  }

  const cellRender = (current, info) => {
    if (info.type === 'date') return dateCellRender(current)
    if (info.type === 'month') return monthCellRender(current)
    return info.originNode
  }

  return (
    <ConfigProvider
      theme={{
        token: {
          colorBgContainer: 'var(--color-grey-0)',
          colorText: 'var(--color-grey-900)',
          colorSplit: 'var(--color-grey-300)',
          colorFillSecondary: 'var(--color-grey-900)',
          colorTextDisabled: 'var(--color-grey-400)',
        },
      }}
    >
      <Calendar cellRender={cellRender} />
    </ConfigProvider>
  )
}

export default WorkSchedule

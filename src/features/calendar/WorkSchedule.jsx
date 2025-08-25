import { Badge, Calendar, ConfigProvider } from 'antd'
import Modal from '../../ui/Modal'
import dayjs from 'dayjs'
import Tag from '../../ui/Tag'
import { formatISO } from 'date-fns'
import CreateTaskForm from '../todos/CreateTaskForm'
import ButtonTodo from '../todos/ButtonTodo'
import { useRef, useState } from 'react'

const WorkSchedule = ({ todos }) => {
  const [data, setData] = useState({})
  const openBtnRef = useRef(null)

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

  function handleSelect(date) {
    const activeElement = document.activeElement.classList.value

    if (activeElement === 'ant-picker-panel' && openBtnRef.current) {
      setData((data) => {
        openBtnRef.current.click()
        return { ...data, dueDate: date.$d }
      })
    }
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
      <Modal>
        <Modal.Open opens='add-task'>
          <ButtonTodo
            $variation='primary'
            size='medium'
            justifyselfs='end'
            ref={openBtnRef}
            style={{ display: 'none' }}
          >
            Add Task +
          </ButtonTodo>
        </Modal.Open>
        <Modal.Window name='add-task'>
          <CreateTaskForm data={data} onClose={() => setIsOpen(false)} />
        </Modal.Window>
      </Modal>
      <Calendar cellRender={cellRender} onSelect={handleSelect} />
    </ConfigProvider>
  )
}

export default WorkSchedule

import {
  HiOutlineChartBar,
  HiOutlineCheck,
  HiOutlineClock,
} from 'react-icons/hi'
import { HiOutlineListBullet } from 'react-icons/hi2'
import { CgDanger } from 'react-icons/cg'

import Stat from './Stat'
import { compareAsc } from 'date-fns'

export default function Stats({ todos }) {
  const workCompleted = todos.filter((todo) => todo.isCompleted).length

  const workOverdue = todos.filter(
    (todo) => !todo.isCompleted && compareAsc(todo.dueDate, new Date()) === -1
  ).length

  return (
    <>
      <Stat
        title='Total Work'
        color='blue'
        icon={<HiOutlineListBullet />}
        value={todos.length}
      />
      <Stat
        title='Finished Work'
        color='green'
        icon={<HiOutlineCheck />}
        value={workCompleted}
      />
      <Stat
        title='Waiting Work'
        color='yellow'
        icon={<HiOutlineClock />}
        value={todos.length - workCompleted}
      />

      <Stat
        title='Overdue Work'
        color='red'
        icon={<CgDanger />}
        value={workOverdue}
      />
    </>
  )
}

import {
  HiOutlineChartBar,
  HiOutlineCheck,
  HiOutlineClock,
} from 'react-icons/hi'
import { HiOutlineListBullet } from 'react-icons/hi2'
import { CgDanger } from 'react-icons/cg'

import Stat from './Stat'

export default function Stats({ todos }) {
  console.log(todos)

  return (
    <>
      <Stat
        title='Total Work'
        color='blue'
        icon={<HiOutlineListBullet />}
        value={12}
      />
      <Stat
        title='Finished Work'
        color='green'
        icon={<HiOutlineCheck />}
        value={21}
      />
      <Stat
        title='Waiting Work'
        color='yellow'
        icon={<HiOutlineClock />}
        value={3}
      />

      <Stat title='Overdue Work' color='red' icon={<CgDanger />} value={4} />
    </>
  )
}

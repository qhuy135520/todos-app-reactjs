import {
  HiOutlineAnnotation,
  HiOutlineBriefcase,
  HiOutlineChartBar,
} from 'react-icons/hi'
import {
  HiOutlineBanknotes,
  HiOutlineCalendarDays,
  HiOutlineTrophy,
} from 'react-icons/hi2'

import Stat from '../dashboard/Stat'
import styled from 'styled-components'

const StyledCategoriesStats = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2.4rem;
`
export default function CategoriesStats({ categories }) {
  const countCategories = categories.length
  const countCategoriesActive = categories.filter(
    (item) => item.isActive === true
  ).length
  const countCategoriesAchrived = countCategories - countCategoriesActive
  return (
    <StyledCategoriesStats>
      <Stat
        title='Total Categories'
        color='blue'
        icon={<HiOutlineBriefcase />}
        value={countCategories}
      />
      <Stat
        title='Active'
        color='green'
        icon={<HiOutlineAnnotation />}
        value={countCategoriesActive}
      />
      <Stat
        title='Archived'
        color='indigo'
        icon={<HiOutlineTrophy />}
        value={countCategoriesAchrived}
      />
    </StyledCategoriesStats>
  )
}

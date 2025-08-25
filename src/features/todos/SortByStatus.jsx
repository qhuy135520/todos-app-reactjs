import Select from '../../ui/Select'
import {
  selectFilterStatusDateOrCompleted,
  setStatusFilter,
} from './todosSlice'
import { useDispatch, useSelector } from 'react-redux'

export default function SortByStatus({ options }) {
  const dispatch = useDispatch()
  const sortBy = useSelector(selectFilterStatusDateOrCompleted)

  function handleClick(e) {
    dispatch(setStatusFilter(e.target.value))
  }

  return (
    <Select
      options={options}
      type='white'
      onChange={handleClick}
      value={sortBy}
    />
  )
}

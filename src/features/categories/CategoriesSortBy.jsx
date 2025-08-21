import { useDispatch, useSelector } from 'react-redux'
import { selectSortBy, setSortBy } from './categoriesSlice'
import Select from '../../ui/Select'

export default function CategoriesSortBy({ options }) {
  const sortBy = useSelector(selectSortBy)
  const dispatch = useDispatch()
  function handleChange(e) {
    dispatch(setSortBy(e.target.value))
  }

  return (
    <Select
      options={options}
      type='white'
      onChange={handleChange}
      value={sortBy}
    />
  )
}

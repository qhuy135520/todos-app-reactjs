import TableOperations from '../../ui/TableOperations'
import CategoriesFilter from './CategoriesFilter'
import CategoriesSortBy from './CategoriesSortBy'

export default function CategoriesOperation() {
  return (
    <TableOperations>
      <CategoriesFilter
        options={[
          { value: 'all', label: 'All' },
          { value: 'active', label: 'active' },
          { value: 'inactive', label: 'Inactive' },
        ]}
      />
      <CategoriesSortBy
        options={[
          { value: 'createdAt-desc', label: 'Sort by date (recent first)' },
          { value: 'createdAt-asc', label: 'Sort by date (earlier first)' },
        ]}
      />
    </TableOperations>
  )
}

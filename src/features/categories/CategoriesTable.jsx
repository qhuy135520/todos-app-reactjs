import { useSearchParams } from 'react-router-dom'
import Menus from '../../ui/Menus'
import Pagination from '../../ui/Pagination'
import Table from '../../ui/Table'
import CategoryRow from './CategoryRow'
import { useSelector } from 'react-redux'
import { selectPagination } from './categoriesSlice'

export default function CategoriesTable({ categories }) {
  const { currentPage, totalPages, limit, totalItems } =
    useSelector(selectPagination)

  return (
    <Menus>
      <Table columns='0.75fr 2.25fr 1fr 0.5fr 1fr 0.5fr'>
        <Table.Header>
          <div>Name</div>
          <div>Description</div>
          <div>Tasks</div>
          <div>Status</div>
          <div>Created</div>
          <div>Actions</div>
        </Table.Header>
        <Table.Body
          data={categories}
          render={(category) => (
            <CategoryRow category={category} key={category.id} />
          )}
        ></Table.Body>
        <Table.Footer>
          <Pagination
            totalItems={totalItems}
            currentPage={currentPage}
            totalPages={totalPages}
            limit={limit}
          />
        </Table.Footer>
      </Table>
    </Menus>
  )
}

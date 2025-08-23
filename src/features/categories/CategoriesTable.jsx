import Menus from '../../ui/Menus'
import CategoryRow from './CategoryRow'
import { useSelector } from 'react-redux'
import { selectPagination } from './categoriesSlice'
import CategoriesPagination from './CategoriesPagination'
import CategoriesTableRow from './CategoriesTableRow'

export default function CategoriesTable({ categories }) {
  const { currentPage, totalPages, limit, totalItems } =
    useSelector(selectPagination)

  return (
    <Menus>
      <CategoriesTableRow columns='0.75fr 2.25fr 1fr 0.5fr 1fr 0.5fr'>
        <CategoriesTableRow.Header>
          <div>Name</div>
          <div>Description</div>
          <div>Tasks</div>
          <div>Status</div>
          <div>Created</div>
          <div>Actions</div>
        </CategoriesTableRow.Header>
        <CategoriesTableRow.Body
          data={categories}
          render={(category) => (
            <CategoryRow category={category} key={category.id} />
          )}
        ></CategoriesTableRow.Body>
        <CategoriesTableRow.Footer>
          <CategoriesPagination
            totalItems={totalItems}
            currentPage={currentPage}
            totalPages={totalPages}
            limit={limit}
          />
        </CategoriesTableRow.Footer>
      </CategoriesTableRow>
    </Menus>
  )
}

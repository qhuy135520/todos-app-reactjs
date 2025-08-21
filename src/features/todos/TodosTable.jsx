import { useSearchParams } from 'react-router-dom'
import Menus from '../../ui/Menus'
import Pagination from '../../ui/Pagination'
import Table from '../../ui/Table'

export default function TodosTable() {
  const filterValue = searchParas.get('priority') || 'all'

  return (
    <Menus>
      <Table>
        <Table.Header>
          <div>User</div>
          <div>Title</div>
          <div>Description</div>
          <div>Completed</div>
          <div>Due Date</div>
          <div>Priority</div>
        </Table.Header>
        {/* <Table.Body></Table.Body>
        <Table.Footer>
          <Pagination count={20} />
        </Table.Footer> */}
      </Table>
    </Menus>
  )
}

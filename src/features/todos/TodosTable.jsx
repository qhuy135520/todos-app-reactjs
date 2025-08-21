import { useSearchParams } from 'react-router-dom'
import Menus from '../../ui/Menus'
import Pagination from '../../ui/Pagination'
import Table from '../../ui/Table'

export default function TodosTable() {
  return (
    <Menus>
      <Table columns='30fr 20fr 30fr 10fr 10fr 10fr'>
        <Table.Header>
          <div>User</div>
          <div>Title</div>
          <div>Description</div>
          <div>Completed</div>
          <div>Due Date</div>
          <div>Priority</div>
        </Table.Header>
        <Table.Body data={[]}></Table.Body>
        <Table.Footer>
          <Pagination count={20} />
        </Table.Footer>
      </Table>
    </Menus>
  )
}

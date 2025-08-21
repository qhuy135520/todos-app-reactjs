import TodosOperation from '../features/todos/TodosOperation'
import TodosTable from '../features/todos/TodosTable'
import Heading from '../ui/Heading'
import Row from '../ui/Row'
import TableOperations from '../ui/TableOperations'

export default function Todos() {
  return (
    <>
      <Row type='horizontal'>
        <Heading as='h1'>All Todos</Heading>
        <TodosOperation />
        <TodosTable />
      </Row>
    </>
  )
}

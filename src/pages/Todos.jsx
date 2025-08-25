
import TodosOperation from '../features/todos/TodosOperation'
import TodosTable from '../features/todos/TodosTable'
import Heading from '../ui/Heading'
import Row from '../ui/Row'

export default function Todos() {
  return (
    <>
      <Row type='vertical'>
        <Heading as='h1'>All Todos</Heading>
        <TodosOperation />
        <TodosTable />
      </Row>
    </>
  )
}

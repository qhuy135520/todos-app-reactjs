import { useSearchParams } from 'react-router-dom'
import Menus from '../../ui/Menus'
import Pagination from '../../ui/Pagination'
import Table from '../../ui/Table'
import { useUser } from '../authentication/useUser'
import { useGetTodos } from './useGetTodos'
import Button from '../../ui/Button'
import Checkbox from '../../ui/Checkbox'
import { useUpdateTodos } from './useUpdateTodo'
import { PAGE_SIZE } from '../../utils/constants'
import Modal from '../../ui/Modal'
import UpdateTaskForm from './UpdateTaskForm'
import DeleteTaskForm from './DeleteTaskForm'
import ButtonTodo from './ButtonTodo'
import { useSearch } from '../../context/SearchTaskContext'

export default function TodosTable() {
  const [searchParams] = useSearchParams()
  const { query } = useSearch()

  const filterPriority = searchParams.get('priority') || 'all'
  const filterDueDate = searchParams.get('sortBy') || 'default'

  const { user, isPending } = useUser()
  const { data = [], isLoading, error } = useGetTodos(user?.id)
  const { updateTodo } = useUpdateTodos(user?.id)

  if (isPending || !user) return <p>Loading user...</p>
  if (isLoading) return <p>Loading task...</p>
  if (error) return <p>Error: {error.message}</p>

  // 1️⃣ Lọc search
  let filteredTodos = query
    ? data.filter((t) => t.title.toLowerCase().includes(query.toLowerCase()))
    : data

  // 2️⃣ Filter priority
  if (filterPriority !== 'all') {
    filteredTodos = filteredTodos.filter((t) => t.priority === filterPriority)
  }

  // 3️⃣ Filter completed
  if (filterDueDate === 'isCompleted') {
    filteredTodos = filteredTodos.filter((t) => t.isCompleted)
  } else if (filterDueDate === 'isUnCompleted') {
    filteredTodos = filteredTodos.filter((t) => !t.isCompleted)
  }

  // 4️⃣ Sort
  filteredTodos = filteredTodos.sort((a, b) => {
    if (filterDueDate === 'startDate-desc')
      return new Date(b.dueDate) - new Date(a.dueDate)
    if (filterDueDate === 'startDate-asc')
      return new Date(a.dueDate) - new Date(b.dueDate)
    return 0
  })

  // 5️⃣ Pagination
  const currentPage = Number(searchParams.get('page') || 1)
  const count = filteredTodos.length
  const startIndex = (currentPage - 1) * PAGE_SIZE
  const todosToShow = filteredTodos.slice(startIndex, startIndex + PAGE_SIZE)

  function handleToggle(todo) {
    updateTodo({ taskID: todo.id, isCompleted: !todo.isCompleted })
  }
  return (
    <Menus>
      <Table columns='1fr 2fr 3fr 1fr 2fr 1fr 1fr'>
        <Table.Header>
          <div>STT</div>
          <div>Title</div>
          <div>Description</div>
          <div>Completed</div>
          <div>Due Date</div>
          <div>Priority</div>
          <div style={{ justifySelf: 'center' }}>Action</div>
        </Table.Header>
        <Table.Body
          data={todosToShow}
          render={(todo, index) => (
            <Table.Row key={todo.id} completed={todo.isCompleted}>
              <div>{(currentPage - 1) * PAGE_SIZE + index + 1}</div>
              <div>{todo.title}</div>
              <div>{todo.description}</div>
              <div style={{ justifySelf: 'center' }}>
                {todo.isCompleted ? (
                  <Checkbox
                    checked={true}
                    onChange={() => {
                      handleToggle(todo)
                    }}
                  />
                ) : (
                  <Checkbox
                    checked={false}
                    onChange={() => {
                      handleToggle(todo)
                    }}
                  />
                )}
              </div>
              <div>{new Date(todo.dueDate).toLocaleDateString('vi-VN')}</div>
              <div
                style={{
                  color: `var(--priority-${todo.priority} )`,
                }}
              >
                {todo.priority}
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.6rem',
                }}
              >
                <Modal>
                  <Modal.Open opens='update-task'>
                    <ButtonTodo $variation='primary' size='small'>
                      Update
                    </ButtonTodo>
                  </Modal.Open>
                  <Modal.Window name='update-task'>
                    <UpdateTaskForm data={todo} />
                  </Modal.Window>
                </Modal>

                <Modal>
                  <Modal.Open opens='delete-task'>
                    <ButtonTodo $variation='danger' size='small'>
                      Delete
                    </ButtonTodo>
                  </Modal.Open>
                  <Modal.Window name='delete-task'>
                    <DeleteTaskForm data={todo} />
                  </Modal.Window>
                </Modal>
              </div>
            </Table.Row>
          )}
        />
        <Table.Footer>
          <Pagination count={count} />
        </Table.Footer>
      </Table>
    </Menus>
  )
}

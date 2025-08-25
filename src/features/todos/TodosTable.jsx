import Menus from '../../ui/Menus'
import PaginationTable from '../../ui/PaginationTable'

import Checkbox from '../../ui/Checkbox'
import Modal from '../../ui/Modal'
import LoadingComponent from '../../ui/LoadingComponent'

import ButtonTodo from './ButtonTodo'
import UpdateTaskForm from './UpdateTaskForm'
import DeleteTaskForm from './DeleteTaskForm'

import {
  fetchTodosSlice,
  selectPaginatedTodos,
  selectPagination,
  setPage,
  updateTodoSlice,
} from './todosSlice'

import { useDispatch, useSelector } from 'react-redux'
import { useUser } from '../authentication/useUser'
import useTodos from '../../hooks/useTodos'
import TodoTableRow from './TodoTableRow'
import styled, { css } from 'styled-components'
import Tag from '../../ui/Tag'
import { format } from 'date-fns'

const StyledLabelRow = styled.div`
  @media (max-width: 1068px) {
    ${(props) => {
      if (props.label === 'Completed' || props.label === 'Action') {
        return css`
          display: flex;
          flex-direction: row !important;
          align-items: center;
        `
      }
    }}
    &::before {
      content: '${(props) => props.label}: ';
      display: inline-block;
      font-weight: 600;
      margin-right: 0.5rem;
      color: var(--color-grey-900);
      min-width: 12rem;
    }
  }
`

const StyledButtonTodos = styled.div`
  gap: 0.4rem;

  display: flex;
  flex-direction: column;
  @media (max-width: 1068px) {
    flex-direction: row;
  }
`

export default function TodosTable() {
  const { user, isPending } = useUser()
  const dispatch = useDispatch()

  const { currentPage, totalPages, limit, totalItems } =
    useSelector(selectPagination)

  const { isPending: isPendingTodos } = useTodos()
  const todos = useSelector(selectPaginatedTodos)
  const handleToggle = async (todo) => {
    await dispatch(
      updateTodoSlice({
        userID: user.id,
        taskID: todo.id,
        dataUpdate: { isCompleted: !todo.isCompleted },
      })
    )
    dispatch(fetchTodosSlice(user.id))
  }

  return (
    <LoadingComponent isLoading={isPending || isPendingTodos}>
      <Menus>
        <TodoTableRow columns='1fr 2fr 3fr 1fr 2fr 1fr 1fr 1fr'>
          <TodoTableRow.Header>
            <div>STT</div>
            <div>Title</div>
            <div>Description</div>
            <div>Completed</div>
            <div>Due Date</div>
            <div>Priority</div>
            <div>Category</div>
            <div style={{ justifySelf: 'center' }}>Action</div>
          </TodoTableRow.Header>
          <TodoTableRow.Body
            data={todos}
            render={(todo, index) => (
              <TodoTableRow.Row key={todo.id} completed={todo.isCompleted}>
                <StyledLabelRow label='STT'>{index + 1}</StyledLabelRow>
                <StyledLabelRow label='Title'>{todo.title}</StyledLabelRow>
                <StyledLabelRow label='Description'>
                  {todo.description}
                </StyledLabelRow>
                <StyledLabelRow label='Completed'>
                  <Checkbox
                    checked={todo.isCompleted}
                    onChange={() => handleToggle(todo)}
                  />
                </StyledLabelRow>
                <StyledLabelRow label='Due Date'>
                  {format(todo.dueDate, 'MMM dd yyyy')}
                </StyledLabelRow>
                <StyledLabelRow label='Priority'>
                  <Tag
                    type={
                      todo.priority === 'high'
                        ? 'red'
                        : todo.priority === 'medium'
                        ? 'yellow'
                        : 'green'
                    }
                  >
                    {todo.priority}
                  </Tag>
                </StyledLabelRow>
                <StyledLabelRow label='Category'>
                  {todo.todo_categories.map((cat, index) => (
                    <span key={index}>
                      {cat.categories.name}
                      {index < todo.todo_categories.length - 1 && ', '}
                    </span>
                  ))}
                </StyledLabelRow>
                <StyledLabelRow label='Action'>
                  <Modal>
                    <StyledButtonTodos>
                      <Modal.Open opens='update-task'>
                        <ButtonTodo $variation='primary' size='small'>
                          Update
                        </ButtonTodo>
                      </Modal.Open>
                      <Modal.Open opens='delete-task'>
                        <ButtonTodo $variation='danger' size='small'>
                          Delete
                        </ButtonTodo>
                      </Modal.Open>
                    </StyledButtonTodos>
                    <Modal.Window name='update-task'>
                      <UpdateTaskForm data={todo} />
                    </Modal.Window>

                    <Modal.Window name='delete-task'>
                      <DeleteTaskForm data={todo} />
                    </Modal.Window>
                  </Modal>
                </StyledLabelRow>
              </TodoTableRow.Row>
            )}
          />
          <TodoTableRow.Footer>
            <PaginationTable
              totalItems={totalItems}
              currentPage={currentPage}
              totalPages={totalPages}
              limit={limit}
              setPage={setPage}
            />
          </TodoTableRow.Footer>
        </TodoTableRow>
      </Menus>
    </LoadingComponent>
  )
}

import { useDispatch, useSelector } from 'react-redux'
import {
  createTodoSlice,
  fetchTodosSlice,
  selectAllTodos,
  selectPaginatedTodos,
  selectTodoStatus,
  setSearchTerm,
  updateTodoSlice,
} from '../features/todos/todosSlice'
import { useForm } from 'react-hook-form'
import { updateTodo } from '../services/apiTodos'
import { useUser } from '../features/authentication/useUser'
import toast from 'react-hot-toast'
import { useEffect } from 'react'
import { formatISO } from 'date-fns'

const useTodos = (todoEdit = {}) => {
  const { user } = useUser()
  const { id: editTodoId, todo_categories = [], ...editValues } = todoEdit
  const isEditSession = Boolean(editTodoId)
  const dispatch = useDispatch()
  const todos = useSelector(selectAllTodos)

  const todosPerPage = useSelector(selectPaginatedTodos)

  const status = useSelector(selectTodoStatus)

  const error = useSelector((state) => state.todos.error)

  const isPending = status === 'pending'

  const handleSearch = (e) => {
    dispatch(setSearchTerm(e.target.value))
  }

  const { register, handleSubmit, reset, formState, control } = useForm({
    defaultValues: isEditSession
      ? {
          ...editValues,
          categories: todo_categories || [],
          priority: editValues.priority || 'low',
        }
      : {
          categories: [],
          priority: 'low',
          dueDate: todoEdit.dueDate
            ? new Date(todoEdit.dueDate).toISOString().split('T')[0]
            : '',
        },
  })

  const { errors } = formState

  function onSubmit(data) {
    const { categories, ...dataUpdate } = data

    if (isEditSession) {
      // const dataUpdate = { categoriesIds, ...data }
      dispatch(
        updateTodoSlice({
          userID: user.id,
          taskID: todoEdit.id,
          dataUpdate: { ...dataUpdate, categoriesUpdate: categories },
        })
      )
      if (status === 'succeeded') toast.success('Updated Todo successfully')

      if (status === 'failed') toast.success('Updated Todo failed')
    } else {
      dispatch(
        createTodoSlice({
          userId: user.id,
          todo: dataUpdate,
          categoriesIds: categories,
        })
      )

      if (status === 'succeeded') {
        toast.success('Create Todo successfully')
      }

      if (status === 'failed') toast.error('Category created Failed')
    }

    reset()
  }
  return {
    todos,
    todosPerPage,
    status,
    error,
    handleSearch,
    isPending,
    editTodoId,
    editValues,
    isEditSession,
    register,
    handleSubmit,
    errors,
    onSubmit,
    control,
  }
}

export default useTodos

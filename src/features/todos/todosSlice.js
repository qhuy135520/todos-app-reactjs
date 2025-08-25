import { createAsyncThunk, createSlice, createSelector } from '@reduxjs/toolkit'
import { PAGE_SIZE } from '../../utils/constants'
import {
  createTodo,
  deleteTodo,
  getTodo,
  updateTodo,
} from '../../services/apiTodos'

const initialState = {
  items: [],
  status: 'idle',
  error: null,
  currentPage: 1,
  totalPages: 1,
  limit: PAGE_SIZE,
  totalItems: 0,
  priorityFilter: 'all',
  statusFilter: 'all',
  sortBy: 'createdAt-desc',
  searchTerm: '',
}

//Asyncs thunk
export const fetchTodosSlice = createAsyncThunk(
  'todos/fetchTodosSlice',
  async (userId) => {
    try {
      const { data, totalItems, totalPages } = await getTodo(userId)
      return { data, totalItems, totalPages }
    } catch (error) {
      throw error
    }
  }
)

export const createTodoSlice = createAsyncThunk(
  'todos/createTodoSlice',
  async ({ userId, todo, categoriesIds }, { dispatch }) => {
    try {
      await createTodo(userId, todo, categoriesIds)
      dispatch(fetchTodosSlice(userId))
    } catch (err) {
      throw err
    }
  }
)

export const deleteTodoSlice = createAsyncThunk(
  'todos/deleteTodoSlice',
  async ({ userID, todoID }, { dispatch }) => {
    try {
      await deleteTodo(todoID)
      dispatch(fetchTodosSlice(userID))
    } catch (err) {
      throw err
    }
  }
)

export const updateTodoSlice = createAsyncThunk(
  'todos/updateTodoSlice',
  async ({ userID, taskID, dataUpdate }, { dispatch }) => {
    try {
      await updateTodo(taskID, dataUpdate)

      dispatch(fetchTodosSlice(userID))
    } catch (err) {
      throw err
    }
  }
)

//Slice
const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    setPage(state, action) {
      state.currentPage = action.payload
    },
    setPriorityFilter(state, action) {
      state.priorityFilter = action.payload
      state.currentPage = 1
    },
    setStatusFilter(state, action) {
      state.statusFilter = action.payload
      state.currentPage = 1
    },
    setSortBy(state, action) {
      state.sortBy = action.payload
    },
    setSearchTerm(state, action) {
      state.searchTerm = action.payload
      state.currentPage = 1
    },
  },
  extraReducers: (builder) => {
    builder
      //FETCH
      .addCase(fetchTodosSlice.pending, (state) => {
        state.status = 'pending'
      })
      .addCase(fetchTodosSlice.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.items = action.payload.data
        state.totalItems = action.payload.totalItems
        state.totalPages = action.payload.totalPages
      })
      .addCase(fetchTodosSlice.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error
      })

      //CREATE
      .addCase(createTodoSlice.pending, (state) => {
        state.status = 'pending'
      })
      .addCase(createTodoSlice.fulfilled, (state, action) => {
        state.status = 'succeeded'
      })
      .addCase(createTodoSlice.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error
      })

      //DELETE
      .addCase(deleteTodoSlice.pending, (state) => {
        state.status = 'pending'
      })
      .addCase(deleteTodoSlice.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.items = state.items.filter((t) => t.id !== action.payload)
        state.totalItems -= 1
      })
      .addCase(deleteTodoSlice.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error
      })

      //UPDATE
      .addCase(updateTodoSlice.pending, (state) => {
        state.status = 'pending'
      })
      .addCase(updateTodoSlice.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.items = state.items.map((t) =>
          t.id === action.payload.id ? action.payload : t
        )
      })
      .addCase(updateTodoSlice.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error
      })
  },
})

export const {
  setPage,
  setPriorityFilter,
  setStatusFilter,
  setSortBy,
  setSearchTerm,
} = todosSlice.actions

export const selectFilterPriorty = (state) => state.todos.priorityFilter
export const selectFilterStatusDateOrCompleted = (state) =>
  state.todos.statusFilter
export const selectCurrentPage = (state) => state.todos.currentPage
export const selectSearchTerm = (state) => state.todos.searchTerm
export const selectLimit = (state) => state.todos.limit
export const selectTodoStatus = (state) => state.todos.status
export const selectAllTodos = (state) => state.todos.items

export const selectFilteredTodos = createSelector(
  (state) => state.todos.items,
  selectFilterPriorty,
  (items, filter) => {
    if (filter === 'low') return items.filter((t) => t.priority === 'low')
    if (filter === 'medium') return items.filter((t) => t.priority === 'medium')
    if (filter === 'high') return items.filter((t) => t.priority === 'high')
    if (filter === 'all') return items
    return items
  }
)

export const selectSearchedTodos = createSelector(
  selectFilteredTodos,
  selectSearchTerm,
  (filteredItems, searchTerm) => {
    if (!searchTerm.trim()) return filteredItems
    const lower = searchTerm.toLowerCase()
    return filteredItems.filter((item) =>
      item.title.toLowerCase().includes(lower)
    )
  }
)
export const selectFilteredDateCompletedTodos = createSelector(
  selectSearchedTodos,
  selectFilterStatusDateOrCompleted,
  (items, filter) => {
    if (filter === 'recent')
      return [...items].sort(
        (a, b) => new Date(b.dueDate) - new Date(a.dueDate)
      )
    if (filter === 'earlier')
      return [...items].sort(
        (a, b) => new Date(a.dueDate) - new Date(b.dueDate)
      )
    if (filter === 'completed') return items.filter((t) => t.isCompleted)
    if (filter === 'uncompleted') return items.filter((t) => !t.isCompleted)
    return items
  }
)

export const selectPaginatedTodos = createSelector(
  selectFilteredDateCompletedTodos,
  selectCurrentPage,
  selectLimit,
  (sortedItems, currentPage, limit) => {
    const start = (currentPage - 1) * limit
    return sortedItems.slice(start, start + limit)
  }
)
export const selectPagination = createSelector(
  selectFilteredDateCompletedTodos,
  selectCurrentPage,
  selectLimit,
  (sortedItems, currentPage, limit) => ({
    currentPage,
    totalPages: Math.ceil(sortedItems.length / limit) || 1,
    limit,
    totalItems: sortedItems.length,
  })
)

export default todosSlice.reducer

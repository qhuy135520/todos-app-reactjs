import { createAsyncThunk, createSelector, createSlice } from '@reduxjs/toolkit'
import {
  getCategories,
  createCategory as createCategoryApi,
  deleteCategory as deleteCategoryApi,
  updateCategory as updateCategoryApi,
} from '../../services/apiCategories'
import { PAGE_SIZE } from '../../utils/constants'
import { compareAsc, compareDesc } from 'date-fns'

const initialState = {
  items: [],
  status: 'idle',
  error: null,
  currentPage: 1,
  totalPages: 1,
  limit: PAGE_SIZE,
  totalItems: 0,
  filter: 'all',
  sortBy: 'createdAt-desc',
  searchTerm: '',
}

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setPage(state, action) {
      state.currentPage = action.payload
    },
    setFilter(state, action) {
      state.filter = action.payload
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
      .addCase(fetchCategories.pending, (state) => {
        state.status = 'pending'
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.items = action.payload.data
        state.totalItems = action.payload.totalItems
        state.totalPages = action.payload.totalPages
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error
      })
      .addCase(createCategory.pending, (state) => {
        state.status = 'pending'
      })

      .addCase(createCategory.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.items = action.payload.data
        state.totalItems = action.payload.totalItems
        state.totalPages = action.payload.totalPages
        state.currentPage = 1
        state.filter = 'all'
        state.sortBy = 'createdAt-desc'
        state.searchTerm = ''
      })
      .addCase(createCategory.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error
      })
      .addCase(deleteCategory.pending, (state, action) => {
        state.status = 'pending'
      })
      .addCase(deleteCategory.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.items = action.payload.data
        state.totalItems = action.payload.totalItems
        state.totalPages = action.payload.totalPages
        state.currentPage = 1
        state.filter = 'all'
        state.sortBy = 'createdAt-desc'
        state.searchTerm = ''
      })
      .addCase(deleteCategory.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error
      })
      .addCase(updateCategory.pending, (state, action) => {
        state.status = 'pending'
      })
      .addCase(updateCategory.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.items = action.payload.data
        state.totalItems = action.payload.totalItems
        state.totalPages = action.payload.totalPages
        state.currentPage = 1
        state.filter = 'all'
        state.sortBy = 'createdAt-desc'
        state.searchTerm = ''
      })
      .addCase(updateCategory.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error
      })
  },
})

export const fetchCategories = createAsyncThunk(
  'categories/fetchCategories',
  async (userId) => {
    try {
      const { data, totalItems, totalPages } = await getCategories(userId)
      return { data, totalItems, totalPages }
    } catch (error) {
      throw error
    }
  }
)

export const createCategory = createAsyncThunk(
  'categories/createCategory',
  async (userId) => {
    try {
      const { data, totalItems, totalPages } = await createCategoryApi(userId)

      return { data, totalItems, totalPages }
    } catch (error) {
      throw error
    }
  }
)
export const deleteCategory = createAsyncThunk(
  'categories/deleteCategory',
  async ({ categoryId, userId }) => {
    try {
      const { data, totalItems, totalPages } = await deleteCategoryApi(
        categoryId,
        userId
      )

      return { data, totalItems, totalPages }
    } catch (error) {
      throw error
    }
  }
)

export const updateCategory = createAsyncThunk(
  'categories/updateCategory',
  async ({ categoryId, dataUpdate, userId }) => {
    try {
      const { data, totalItems, totalPages } = await updateCategoryApi(
        categoryId,
        dataUpdate,
        userId
      )

      return { data, totalItems, totalPages }
    } catch (error) {
      throw error
    }
  }
)

export const { setPage, setFilter, setSortBy, setSearchTerm } =
  categoriesSlice.actions

export const selectFilter = (state) => state.categories.filter
export const selectSortBy = (state) => state.categories.sortBy
export const selectCurrentPage = (state) => state.categories.currentPage
export const selectSearchTerm = (state) => state.categories.searchTerm
export const selectLimit = (state) => state.categories.limit
export const selectCategoriesStatus = (state) => state.categories.status
export const selectAllCategories = (state) => state.categories.items

export const selectFilteredCategories = createSelector(
  (state) => state.categories.items,
  selectFilter,
  (items, filter) => {
    if (filter === 'active') return items.filter((c) => c.isActive)
    if (filter === 'inactive') return items.filter((c) => !c.isActive)
    return items
  }
)

export const selectSearchedCategories = createSelector(
  selectFilteredCategories,
  selectSearchTerm,
  (filteredItems, searchTerm) => {
    if (!searchTerm.trim()) return filteredItems
    const lower = searchTerm.toLowerCase()
    return filteredItems.filter((item) =>
      item.name.toLowerCase().startsWith(lower)
    )
  }
)

export const selectSortedCategories = createSelector(
  selectSearchedCategories,
  selectSortBy,
  (items, sortBy) => {
    const [field, direction] = sortBy.split('-')
    return [...items].sort((a, b) => {
      const aValue = a[field]
      const bValue = b[field]

      if (field === 'createdAt' || field === 'updatedAt') {
        if (direction === 'asc')
          return compareAsc(new Date(aValue), new Date(bValue))
        if (direction === 'desc')
          return compareDesc(new Date(aValue), new Date(bValue))
      }

      if (typeof aValue === 'string' && typeof bValue === 'string') {
        return direction === 'asc'
          ? aValue.localeCompare(bValue)
          : bValue.localeCompare(aValue)
      }
      return direction === 'asc' ? aValue - bValue : bValue - aValue
    })
  }
)

export const selectPaginatedCategories = createSelector(
  selectSortedCategories,
  selectCurrentPage,
  selectLimit,
  (sortedItems, currentPage, limit) => {
    const start = (currentPage - 1) * limit
    return sortedItems.slice(start, start + limit)
  }
)

export const selectPagination = createSelector(
  selectSortedCategories,
  selectCurrentPage,
  selectLimit,
  (sortedItems, currentPage, limit) => ({
    currentPage,
    totalPages: Math.ceil(sortedItems.length / limit) || 1,
    limit,
    totalItems: sortedItems.length,
  })
)

export default categoriesSlice.reducer

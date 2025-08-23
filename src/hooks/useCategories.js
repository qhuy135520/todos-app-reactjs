import { useDispatch, useSelector } from 'react-redux'
import {
  selectAllCategories,
  selectCategoriesStatus,
  selectPaginatedCategories,
  setSearchTerm,
} from '../features/categories/categoriesSlice'
import { useForm } from 'react-hook-form'

const useCategories = (categoryEdit = {}) => {
  const { id: editId, ...editValues } = categoryEdit

  const isEditSession = Boolean(editId)

  const dispatch = useDispatch()
  const categories = useSelector(selectAllCategories)

  const categoriesPerPage = useSelector(selectPaginatedCategories)

  const status = useSelector(selectCategoriesStatus)

  const error = useSelector((state) => state.categories.error)

  const isPending = status === 'pending'

  const handleSearch = (e) => {
    dispatch(setSearchTerm(e.target.value))
  }

  const { register, handleSubmit, reset, formState } = useForm({
    defaultValues: isEditSession ? editValues : {},
  })

  const { errors } = formState

  function onSubmit(data) {
    if (isEditSession) {
      const dataUpdate = { ...data }
      dispatch(
        updateCategory({
          categoryId: categoryEdit.id,
          dataUpdate,
          userId: user.id,
        })
      )
      if (status === 'succeeded') toast.success('Updated Category successfully')
      if (status === 'failed') toast.success('Updated Category failed')
    } else {
      dispatch(createCategory({ ...data, userId: user.id }))
      if (status === 'succeeded') toast.success('Category created successfully')
      if (status === 'failed') toast.error('Category created Failed')
    }

    reset()
  }

  return {
    categories,
    categoriesPerPage,
    status,
    error,
    handleSearch,
    isPending,
    editId,
    editValues,
    isEditSession,
    register,
    handleSubmit,
    errors,
    onSubmit,
  }
}
export default useCategories

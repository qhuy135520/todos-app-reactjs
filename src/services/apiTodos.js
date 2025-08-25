import { PAGE_SIZE } from '../utils/constants'
import supabase from './supabase'

// Lấy tất cả todo kèm categories
export async function getTodo(userID) {
  try {
    const { data, error } = await supabase
      .from('todos')
      .select(
        `
      *,
      todo_categories (
        categories (id, name)
      )
    `
      ) // join categories qua bảng trung gian
      .eq('userId', userID)
      .order('createdAt', { ascending: true })

    if (error) throw new Error(error.message)

    const totalItems = data.length
    const totalPages = Math.ceil(totalItems / PAGE_SIZE)

    return { data, totalItems, totalPages }
  } catch (err) {
    throw err
  }
}

export async function createTodo(userId, todo, categoryIds) {
  try {
    const taskWithUser = { ...todo, userId }
    const { data: newTodo, error } = await supabase
      .from('todos')
      .insert([taskWithUser])
      .select()
      .single()

    if (error) throw error

    if (categoryIds?.length > 0) {
      const todoCategories = categoryIds.map((categoryId) => ({
        todoId: newTodo.id,
        categoryId,
      }))

      const { error: addCateErr } = await supabase
        .from('todo_categories')
        .insert(todoCategories)

      if (addCateErr) throw addCateErr
    }

    return newTodo
  } catch (err) {
    throw new Error(err.message)
  }
}

export async function updateTodo(taskID, dataUpdate) {
  try {
    const {
      categoriesUpdate = [],
      isCompleted,
      ...dataUpdateNotCate
    } = dataUpdate
    if (
      typeof isCompleted !== 'undefined' &&
      Object.keys(dataUpdateNotCate).length === 0
    ) {
      await supabase
        .from('todos')
        .update({ isCompleted })
        .eq('id', taskID)
        .select()
    } else {
      const { error } = await supabase
        .from('todos')
        .update(dataUpdateNotCate)
        .eq('id', taskID)
        .select()
      if (error) throw new Error(error.message)
      if (categoriesUpdate) {
        await supabase.from('todo_categories').delete().eq('todoId', taskID)
        if (categoriesUpdate.length > 0) {
          const inserts = categoriesUpdate.map((catId) => ({
            todoId: taskID,
            categoryId: catId,
          }))
          const { error: insertError } = await supabase
            .from('todo_categories')
            .insert(inserts)
          if (insertError) throw new Error(insertError.message)
        }
      }
    }
  } catch (err) {
    throw err
  }
}

export async function deleteTodo(taskID) {
  try {
    const { data, error: errorTodoCategories } = await supabase
      .from('todo_categories')
      .delete()
      .eq('todoId', taskID)

    if (errorTodoCategories) throw errorTodoCategories

    const { error } = await supabase.from('todos').delete().eq('id', taskID)

    if (error) throw new Error(error.message)

    return data
  } catch (error) {
    throw error
  }
}

export async function getCategoriesFromTask(taskID) {
  const { data, error } = await supabase
    .from('todo_categories')
    .select('categories(id, name)')
    .eq('todoId', taskID)

  if (error) throw new Error(error.message)
  return data
}

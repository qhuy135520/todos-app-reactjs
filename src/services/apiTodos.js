import supabase from './supabase'

// Lấy tất cả todo kèm categories
export async function getTodo(userID) {
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
  console.log('data sau khi fix', data)
  return data
}

// Thêm todo + gắn categories (nếu có)
export async function addTodo(task, userID) {
  const taskWithUser = { ...task, userId: userID }
  const { data, error } = await supabase
    .from('todos')
    .insert([taskWithUser])
    .select()
  if (error) throw new Error(error.message)
  const newTodo = data[0]
  return newTodo
}

// Update todo + update categories
export async function updateTodo(taskID, updates) {
  // update fields cơ bản trong bảng todos
  const { data, error } = await supabase
    .from('todos')
    .update(updates)
    .eq('id', taskID)
    .select()
  if (error) throw new Error(error.message)

  const updatedTodo = data[0]
  return updatedTodo
}

export async function deleteTodo(taskID) {
  // xóa quan hệ trước
  await supabase.from('todo_categories').delete().eq('todoId', taskID)
  // rồi xóa todo
  const { error } = await supabase.from('todos').delete().eq('id', taskID)
  if (error) throw new Error(error.message)
}

export async function getCategoriesFromTask(taskID) {
  const { data, error } = await supabase
    .from('todo_categories')
    .select('categories(id, name)')
    .eq('todoId', taskID)

  if (error) throw new Error(error.message)
  return data
}

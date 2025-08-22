import supabase, { supabaseUrl } from './supabase'

export async function getTodo(userID) {
  const { data, error } = await supabase
    .from('todos')
    .select('*')
    .eq('userId', userID)
    .order('createdAt', { ascending: true })
  if (error) throw new Error(error.message)
  return data
}

export async function addTodo(task, userID) {
  const taskWithUser = { ...task, userId: userID }
  const { data, error } = await supabase
    .from('todos')
    .insert([taskWithUser])
    .select()
  if (error) throw new Error(error.message)
  return data[0]
}

export async function updateTodo(taskID, updates) {
  const { data, error } = await supabase
    .from('todos')
    .update(updates)
    .eq('id', taskID)
    .select()
  if (error) throw new Error(error.message)
  return data[0]
}

export async function deleteTodo(taskID) {
  const { error } = await supabase.from('todos').delete().eq('id', taskID)
  if (error) throw new Error(error.message)
}

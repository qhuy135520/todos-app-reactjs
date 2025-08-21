import supabase from './supabase'

export async function getTodos() {
  const { data, error } = await supabase.from('todos').select('*')
  if (error) {
    console.error(error)
    throw new Error('Todos could not be loaded')
  }

  return data
}

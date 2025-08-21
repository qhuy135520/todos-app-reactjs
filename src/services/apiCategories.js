import { PAGE_SIZE } from '../utils/constants'
import supabase from './supabase'

export const getCategories = async (userId) => {
  const { data, error } = await supabase
    .from('categories')
    .select('*')
    .eq('userId', userId)

  if (error) throw error

  const totalItems = data.length
  const totalPages = Math.ceil(totalItems / PAGE_SIZE)

  return { data, totalItems, totalPages }
}

export const createCategory = async ({ userId, name, description }) => {
  const { error } = await supabase
    .from('categories')
    .insert([{ userId, name, description }])

  if (error) throw error

  const { data, totalItems, totalPages } = await getCategories(userId)
  return { data, totalItems, totalPages }
}

export const deleteCategory = async (categoryId, userId) => {
  const { error } = await supabase
    .from('categories')
    .delete()
    .eq('id', categoryId)

  if (error) throw error

  const { data, totalItems, totalPages } = await getCategories(userId)

  return { data, totalItems, totalPages }
}

export const updateCategory = async (categoryId, dataUpdate, userId) => {
  const { error } = await supabase
    .from('categories')
    .update(dataUpdate)
    .eq('id', categoryId)
  if (error) throw error

  const { data, totalItems, totalPages } = await getCategories(userId)

  return { data, totalItems, totalPages }
}

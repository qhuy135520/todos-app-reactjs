import { useMutation, useQueryClient } from '@tanstack/react-query'
import supabase from '../../services/supabase'
import { toast } from 'react-hot-toast'
import { addTodo as addTodoApi } from '../../services/apiTodos'
export function useAddTodo(userId) {
  const queryClient = useQueryClient()

  const { mutateAsync: addTodo, isPending } = useMutation({
    mutationFn: async (formData) => {
      const newTodo = await addTodoApi(
        {
          title: formData.title,
          description: formData.description,
          dueDate: formData.dueDate,
          priority: formData.priority,
        },
        userId
      )

      if (formData.categories?.length > 0) {
        const inserts = formData.categories.map((catId) => ({
          todoId: newTodo.id,
          categoryId: catId,
        }))
        const { error: catError } = await supabase
          .from('todo_categories')
          .insert(inserts)
        if (catError) throw catError
      }

      return newTodo
    },
    onSuccess: () => {
      toast.success('New todo added!')

      queryClient.invalidateQueries({ queryKey: ['todos', userId] })
    },
  })

  return { addTodo, isPending }
}

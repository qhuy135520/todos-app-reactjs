import { useMutation, useQueryClient } from '@tanstack/react-query'
import supabase from '../../services/supabase'
import { updateTodo as updateTodoApi } from '../../services/apiTodos'
import { toast } from 'react-hot-toast'

export function useUpdateTodos(userId) {
  const queryClient = useQueryClient()

  const {
    mutate: updateTodo,
    mutateAsync: updateTodoAsync,
    isPending,
  } = useMutation({
    mutationFn: async ({ taskID, data, isCompleted }) => {
      if (!data) {
        return updateTodoApi(taskID, { isCompleted })
      }
      const { categories, ...todoData } = data

      const updated = await updateTodoApi(taskID, todoData)
      
      if (categories) {
        await supabase.from('todo_categories').delete().eq('todoId', taskID)

        if (data.categories.length > 0) {
          const inserts = categories.map((catId) => ({
            todoId: taskID,
            categoryId: catId,
          }))
          await supabase.from('todo_categories').insert(inserts)
        }
      }

      return updated
    },
    onSuccess: () => {
      toast.success('Update task success!')
      queryClient.invalidateQueries({ queryKey: ['todos', userId] })
    },
  })

  return { updateTodo, updateTodoAsync, isPending }
}

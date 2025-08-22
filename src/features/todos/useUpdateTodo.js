import { useMutation, useQueryClient } from '@tanstack/react-query'
import { updateTodo as updateTodoApi } from '../../services/apiTodos'
import { toast } from 'react-hot-toast'

export function useUpdateTodos(userId) {
  const queryClient = useQueryClient()

  const { mutate: updateTodo, isPending } = useMutation({
    mutationFn: ({ taskID, data, isCompleted }) => {
      if (data) {
        return updateTodoApi(taskID, data)
      } else {
        return updateTodoApi(taskID, { isCompleted })
      }
    },
    onSuccess: () => {
      toast.success('Update task success!')
      //reload
      queryClient.invalidateQueries({ queryKey: ['todos', userId] })
    },
  })

  return { updateTodo, isPending }
}

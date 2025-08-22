import { useMutation, useQueryClient } from '@tanstack/react-query'
import { deleteTodo as deleteTodoApi } from '../../services/apiTodos'
import { toast } from 'react-hot-toast'

export function useDeleteTodo(userId) {
  const queryClient = useQueryClient()

  const { mutate: deleteTodo, isPending } = useMutation({
    mutationFn: (id) => deleteTodoApi(id),
    onSuccess: () => {
      toast.success('Delete Task Success!')
      //reload
      queryClient.invalidateQueries({ queryKey: ['todos', userId] })
    },
  })

  return { deleteTodo, isPending }
}

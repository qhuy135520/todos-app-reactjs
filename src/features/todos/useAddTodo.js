import { useMutation, useQueryClient } from '@tanstack/react-query'
import { addTodo as addTodoApi } from '../../services/apiTodos'
import { toast } from 'react-hot-toast'

export function useAddTodo(userId) {
  const queryClient = useQueryClient()

  const { mutate: addTodo, isPending } = useMutation({
    mutationFn: (data) => addTodoApi(data, userId),
    onSuccess: () => {
      toast.success('Add new task success!')
      //reload
      queryClient.invalidateQueries({ queryKey: ['todos', userId] })
    },
  })

  return { addTodo, isPending }
}

import { useQuery } from '@tanstack/react-query'
import * as apiTodo from '../../services/apiTodos'

export function useGetTodos(currentUserId) {
  return useQuery({
    queryKey: ['todos', currentUserId],
    queryFn: () => apiTodo.getTodo(currentUserId),
  })
}

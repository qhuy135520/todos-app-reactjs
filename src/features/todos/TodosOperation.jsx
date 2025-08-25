import TableOperations from '../../ui/TableOperations'
import Modal from '../../ui/Modal'
import ButtonTodo from './ButtonTodo'
import Input from '../../ui/Input'
import CreateTaskForm from './CreateTaskForm'
import TodoFilterPriority from './TodosFilterPriority'
import SortByStatus from './SortByStatus'
import useTodos from '../../hooks/useTodos'
export default function TodosOperation() {
  const { handleSearch } = useTodos()
  return (
    <TableOperations>
        <TodoFilterPriority
          options={[
            { value: 'all', label: 'All' },
            { value: 'low', label: 'Low' },
            { value: 'medium', label: 'Medium' },
            { value: 'high', label: 'High' },
          ]}
        />
        <SortByStatus
          options={[
            { value: 'default', label: 'Default' },
            { value: 'recent', label: 'Sort by date (recent first)' },
            { value: 'earlier', label: 'Sort by date (earlier first)' },
            { value: 'completed', label: 'Completed' },
            { value: 'uncompleted', label: 'UnCompleted' },
          ]}
        />
        <Input onChange={handleSearch} placeholder='Search task...' />
      <Modal>
        <Modal.Open opens='add-task'>
          <ButtonTodo $variation='primary' size='medium' justifyselfs='end'>
            Add Task +
          </ButtonTodo>
        </Modal.Open>
        <Modal.Window name='add-task'>
          <CreateTaskForm onClose={() => setIsOpen(false)} />
        </Modal.Window>
      </Modal>
    </TableOperations>
  )
}

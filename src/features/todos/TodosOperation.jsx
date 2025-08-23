import { useSearchParams } from 'react-router-dom'
import Filter from '../../ui/Filter'
import SortBy from '../../ui/SortBy'
import TableOperations from '../../ui/TableOperations'
import Button from '../../ui/Button'
import Modal from '../../ui/Modal'
import AddTaskForm from './AddTaskForm'
import ButtonTodo from './ButtonTodo'
import Input from '../../ui/Input'
import { useSearch } from '../../context/SearchTaskContext'

export default function TodosOperation() {
  const { query, setQuery } = useSearch()

  return (
    <TableOperations>
      <Filter
        filterField='priority'
        options={[
          { value: 'all', label: 'All' },
          { value: 'low', label: 'Low' },
          { value: 'medium', label: 'Medium' },
          { value: 'high', label: 'High' },
        ]}
      />
      <SortBy
        filterField='sortBy'
        options={[
          { value: 'default', label: 'Default' },
          { value: 'startDate-desc', label: 'Sort by date (recent first)' },
          { value: 'startDate-asc', label: 'Sort by date (earlier first)' },
          { value: 'isCompleted', label: 'Completed' },
          { value: 'isUnCompleted', label: 'UnCompleted' },
        ]}
      />

      <Input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder='Search task...'
      />

      <Modal>
        <Modal.Open opens='add-task'>
          <ButtonTodo $variation='primary' size='medium' justifyselfs='end'>
            Add Task +
          </ButtonTodo>
        </Modal.Open>
        <Modal.Window name='add-task'>
          <AddTaskForm onClose={() => setIsOpen(false)} />
        </Modal.Window>
      </Modal>
    </TableOperations>
  )
}

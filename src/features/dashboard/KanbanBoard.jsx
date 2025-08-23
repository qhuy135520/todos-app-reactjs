import React, { useMemo, useState } from 'react'
import {
  DndContext,
  closestCorners,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core'
import {
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
  arrayMove,
} from '@dnd-kit/sortable'
import { useDroppable } from '@dnd-kit/core'
import { CSS } from '@dnd-kit/utilities'
import '../../styles/KanbanBoard.css'
import { useUpdateTodos } from '../todos/useUpdateTodo'
import Heading from '../../ui/Heading'
import styled from 'styled-components'

const StyledKanbanBoard = styled.div`
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
  color: 'var(--color-grey-900)';
  padding: 2.4rem 3.2rem;
  grid-column: 1/-1;
`

const COLUMN_META = {
  todo: { title: 'To Do', bg: '#f5f7fa' },
  done: { title: 'Done', bg: '#ecfdf5' },
}

const formatDate = (iso) =>
  new Date(iso).toLocaleDateString(undefined, {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  })

const priorityColor = (p) =>
  p === 'high' ? '#ff4d4f' : p === 'medium' ? '#faad14' : '#52c41a'

function TaskCard({ task, columnId }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: task.id,
    data: { type: 'task', task, columnId },
  })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.6 : 1,
  }

  const nearDeadline = (() => {
    const diffDays = Math.ceil(
      (new Date(task.dueDate) - new Date()) / (1000 * 60 * 60 * 24)
    )
    return diffDays <= 3
  })()

  return (
    <div
      ref={setNodeRef}
      style={style}
      className='kanban-card'
      {...attributes}
      {...listeners}
    >
      <div className='card-header'>
        <span className='card-title'>{task.title}</span>
        <span
          className='priority-dot'
          style={{ backgroundColor: priorityColor(task.priority) }}
        />
      </div>
      <p className='card-desc'>{task.description}</p>
      <p className={`card-date ${nearDeadline ? 'card-date--danger' : ''}`}>
        Due: <strong>{formatDate(task.dueDate)}</strong>
      </p>
    </div>
  )
}

function Column({ id, tasks, children }) {
  const { setNodeRef, isOver } = useDroppable({ id })
  return (
    <div
      ref={setNodeRef}
      className={`kanban-column ${isOver ? 'kanban-column--over' : ''}`}
      style={{ background: COLUMN_META[id].bg }}
    >
      <div className='kanban-column__head'>
        <h2>{COLUMN_META[id].title}</h2>
        <span className='kanban-badge'>{tasks.length}</span>
      </div>

      <SortableContext
        items={tasks.map((t) => t.id)}
        strategy={verticalListSortingStrategy}
      >
        {children}
      </SortableContext>
    </div>
  )
}

export default function KanbanBoard({ todos, userId }) {
  const { updateTodo } = useUpdateTodos(userId)

  const initial = useMemo(() => {
    const grouped = { todo: [], done: [] }
    for (const t of todos) {
      const base = { ...t, status: t.isCompleted ? 'done' : 'todo' }
      grouped[base.status].push(base)
    }
    return grouped
  }, [todos])

  const [columns, setColumns] = useState(initial)

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 5 } })
  )

  const findContainer = (id) => {
    if (columns[id]) return id
    return Object.keys(columns).find((col) =>
      columns[col].some((item) => item.id === id)
    )
  }

  const getItemIndex = (containerId, itemId) =>
    columns[containerId].findIndex((i) => i.id === itemId)

  const moveBetween = (fromId, toId, itemId, toIndex) => {
    const fromItems = [...columns[fromId]]
    const toItems = [...columns[toId]]
    const fromIndex = fromItems.findIndex((i) => i.id === itemId)
    const [moved] = fromItems.splice(fromIndex, 1)

    moved.status = toId
    moved.isCompleted = toId === 'done'
    toItems.splice(toIndex, 0, moved)

    setColumns((prev) => ({
      ...prev,
      [fromId]: fromItems,
      [toId]: toItems,
    }))

    updateTodo({
      taskID: moved.id,
      data: { isCompleted: moved.isCompleted },
    })
  }

  const onDragEnd = ({ active, over }) => {
    if (!over) return
    const activeId = active.id
    const overId = over.id

    const fromContainer = findContainer(activeId)
    const toContainer = findContainer(overId)
    if (!fromContainer || !toContainer) return

    if (fromContainer === toContainer) {
      const oldIndex = getItemIndex(fromContainer, activeId)
      const newIndex = columns[toContainer].some((i) => i.id === overId)
        ? getItemIndex(toContainer, overId)
        : columns[toContainer].length

      if (oldIndex !== newIndex) {
        setColumns((prev) => ({
          ...prev,
          [toContainer]: arrayMove(prev[toContainer], oldIndex, newIndex),
        }))
      }
      return
    }

    const toIndex = columns[toContainer].some((i) => i.id === overId)
      ? getItemIndex(toContainer, overId)
      : columns[toContainer].length

    moveBetween(fromContainer, toContainer, activeId, toIndex)
  }

  return (
    <StyledKanbanBoard>
      <div className='kanban-wrap'>
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>
          📈 Kanban Board
        </h2>
        <DndContext
          sensors={sensors}
          collisionDetection={closestCorners}
          onDragEnd={onDragEnd}
        >
          <div className='kanban-board'>
            {Object.keys(COLUMN_META).map((colId) => (
              <Column key={colId} id={colId} tasks={columns[colId]}>
                {columns[colId].map((task) => (
                  <TaskCard key={task.id} task={task} columnId={colId} />
                ))}
              </Column>
            ))}
          </div>
        </DndContext>
      </div>
    </StyledKanbanBoard>
  )
}

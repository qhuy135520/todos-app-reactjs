import styled from 'styled-components'
import Table from '../../ui/Table'
import { formatDistanceFromNow } from '../../utils/helpers'

import Tag from '../../ui/Tag'
import { format, isToday } from 'date-fns'
import CategoriesActionsDrop from './CategoriesActionsDrop'
import CategoriesTableRow from './CategoriesTableRow'

const Name = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: 'Sono';
`

const Stacked = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;

  & span:first-child {
    font-weight: 500;
  }

  & span:last-child {
    color: var(--color-grey-500);
    font-size: 1.2rem;
  }
`

const Amount = styled.div`
  font-family: 'Sono';
  font-weight: 500;
`
const statusToTagName = {
  true: 'green',
  false: 'red',
}

export default function CategoryRow({ category }) {
  return (
    <CategoriesTableRow.Row>
      <Name>{category.name}</Name>
      <span>{category.description}</span>
      <Stacked>
        <span>
          {isToday(new Date(category.createdAt))
            ? 'Today'
            : formatDistanceFromNow(category.updatedAt)}
        </span>
        <span>
          {format(new Date(category.createdAt), 'MMM dd yyyy')} &mdash;
          {format(new Date(category.updatedAt), 'MMM dd yyyy')}
        </span>
      </Stacked>
      <Tag type={statusToTagName[category.isActive]}>
        {category.isActive ? 'Active' : 'Inactive'}
      </Tag>
      <Stacked>{format(new Date(category.createdAt), 'MMM dd yyyy')}</Stacked>
      <CategoriesActionsDrop category={category} />
    </CategoriesTableRow.Row>
  )
}

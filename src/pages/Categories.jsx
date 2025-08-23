import useCategories from '../hooks/useCategories'

import CategoriesOperation from '../features/categories/CategoriesOperation'
import Heading from '../ui/Heading'
import CategoriesStats from '../features/categories/CategoriesStats'
import Row from '../ui/Row'

import CategoriesTable from '../features/categories/CategoriesTable'
import Input from '../ui/Input'
import AddCategories from '../features/categories/AddCategories'
import LoadingComponent from '../ui/LoadingComponent'
import styled from 'styled-components'

const StyledSearchButton = styled.div`
  @media (max-width: 1068px) {
    width: 100%;
    margin-bottom: 1.6rem;
  }
`

export default function Categories() {
  const { categories, categoriesPerPage, status, error, handleSearch } =
    useCategories()

  return (
    <LoadingComponent isLoading={status === 'pending'} error={error}>
      <Row type='horizontal'>
        <Heading as='h1'>Category Management</Heading>
        <AddCategories />
      </Row>
      <Row type='vertical'>
        <p as='h3'>Manage your task categories</p>
      </Row>
      <CategoriesStats categories={categories} />
      <Row type='horizontal'>
        <StyledSearchButton>
          <Input
            placeholder='Search category name'
            type='text'
            onChange={handleSearch}
          />
        </StyledSearchButton>

        <CategoriesOperation />
      </Row>
      <CategoriesTable categories={categoriesPerPage} />
    </LoadingComponent>
  )
}

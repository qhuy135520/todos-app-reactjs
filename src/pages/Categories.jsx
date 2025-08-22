import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { compareAsc, compareDesc } from 'date-fns'
import { useSearchParams } from 'react-router-dom'

import {
  fetchCategories,
  selectAllCategories,
  selectCategoriesStatus,
  selectPaginatedCategories,
  setSearchTerm,
} from '../features/categories/categoriesSlice'
import { useUser } from '../features/authentication/useUser'

import CategoriesOperation from '../features/categories/CategoriesOperation'
import Heading from '../ui/Heading'
import Row from '../ui/Row'
import CategoriesStats from '../features/categories/CategoriesStats'
import Button from '../ui/Button'
import Spinner from '../ui/Spinner'
import CategoriesTable from '../features/categories/CategoriesTable'
import Input from '../ui/Input'
import AddCategories from '../features/categories/AddCategories'

export default function Categories() {
  const [searchParams, setSearchParams] = useSearchParams()
  
  const categories = useSelector(selectAllCategories)
  const categoriesPerPage = useSelector(selectPaginatedCategories)
  console.log("list cateee", categories)
  const status = useSelector(selectCategoriesStatus)
  
  

  const handleSearch = (e) => {
    dispatch(setSearchTerm(e.target.value))
  }

  if (status === 'pending') return <Spinner />

  return (
    <>
      <Row type='horizontal'>
        <Heading as='h1'>Category Management</Heading>
        <AddCategories />
      </Row>
      <Row type='vertical'>
        <p as='h3'>Manage your task categories</p>
      </Row>
      <CategoriesStats categories={categories} />
      <Row type='horizontal'>
        <div>
          <Button variation='secondary' size='medium' disabled>
            Search
          </Button>
          &nbsp;&nbsp;
          <Input
            placeholder='Search category name'
            type='text'
            onChange={handleSearch}
          />
        </div>

        <CategoriesOperation />
      </Row>
      <CategoriesTable categories={categoriesPerPage} />
    </>
  )
}

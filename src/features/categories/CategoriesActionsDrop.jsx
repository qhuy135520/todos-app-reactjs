import { Button, Dropdown, Menu, Space, Tooltip } from 'antd'
import { DownOutlined, UserOutlined } from '@ant-design/icons'
import {
  HiOutlineAcademicCap,
  HiOutlinePencil,
  HiOutlineTrash,
} from 'react-icons/hi'
import { HiOutlineArrowPathRoundedSquare } from 'react-icons/hi2'
import Modal from '../../ui/Modal'
import { useDispatch, useSelector } from 'react-redux'
import {
  deleteCategory,
  selectCategoriesStatus,
  updateCategory,
} from './categoriesSlice'
import { useUser } from '../authentication/useUser'
import toast from 'react-hot-toast'
import ConfirmAction from './ConfirmAction'
import CreateCategoriesForm from './CreateCategoriesForm'

const items = [
  {
    label: 'EDIT',
    key: '1',
    icon: <HiOutlinePencil />,
  },
  {
    label: 'INACTIVE',
    key: '2',
    icon: <HiOutlineAcademicCap />,
    danger: true,
  },
  {
    label: 'DELETE',
    key: '3',
    icon: <HiOutlineTrash />,
    danger: true,
  },
]

const menuProps = {
  items,
}

export default function CategoriesActionsDrop({ category }) {
  const { user } = useUser()

  const status = useSelector(selectCategoriesStatus)
  const dispatch = useDispatch()

  function handleDeleteCategory() {
    dispatch(deleteCategory({ categoryId: category.id, userId: user.id }))

    if (status === 'succeeded') toast.success('Delete Category successfully')
    if (status === 'failed') toast.success('Delete Category failed')
  }

  function handleToggleActiveCategory() {
    const dataUpdate = { isActive: category.isActive ? false : true }
    dispatch(
      updateCategory({
        categoryId: category.id,
        dataUpdate,
        userId: user.id,
      })
    )
    if (status === 'succeeded') toast.success('Updated Category successfully')
    if (status === 'failed') toast.success('Updated Category failed')
  }

  return (
    <Space wrap>
      <Dropdown
        overlay={
          <Modal>
            <Menu>
              <Modal.Open opens='edit'>
                <Menu.Item key='1' icon={<HiOutlinePencil />}>
                  EDIT
                </Menu.Item>
              </Modal.Open>
              <Modal.Open
                opens={`${category.isActive ? 'inactive' : 'active'}`}
              >
                <Menu.Item key='2' icon={<HiOutlineAcademicCap />} danger>
                  {category.isActive ? 'INACTIVE' : 'ACTIVE'}
                </Menu.Item>
              </Modal.Open>
              {/* <Modal.Open opens='delete'>
                <Menu.Item key='3' icon={<HiOutlineTrash />} danger>
                  Delete
                </Menu.Item>
              </Modal.Open> */}
            </Menu>
            <Modal.Window name='edit' size='medium'>
              <CreateCategoriesForm categoryEdit={category} />
            </Modal.Window>
            {/* <Modal.Window name='delete'>
              <ConfirmAction
                action='delete'
                type='red'
                resourceName={`Category #${category.name}`}
                onConfirm={() => handleDeleteCategory()}
              />
            </Modal.Window> */}
            <Modal.Window name={`${category.isActive ? 'inactive' : 'active'}`}>
              <ConfirmAction
                action={`${category.isActive ? 'INACTIVE' : 'ACTIVE'}`}
                type={`${category.isActive ? 'red' : 'green'}`}
                resourceName={`Category #${category.name}`}
                onConfirm={() => {
                  handleToggleActiveCategory()
                }}
              />
            </Modal.Window>
          </Modal>
        }
      >
        <Button>
          <Space>
            <HiOutlineArrowPathRoundedSquare />
            <DownOutlined />
          </Space>
        </Button>
      </Dropdown>
    </Space>
  )
}

import Button from '../../ui/Button'
import Modal from '../../ui/Modal'
import CreateCategoriesForm from './CreateCategoriesForm'

export default function AddCategories() {
  return (
    <Modal>
      <Modal.Open opens='categories-form'>
        <Button variation='primary' size='medium'>
          + Add Categories
        </Button>
      </Modal.Open>
      <Modal.Window name='categories-form'>
        <CreateCategoriesForm />
      </Modal.Window>
    </Modal>
  )
}

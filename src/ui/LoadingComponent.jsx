import ErrorComponent from './ErrorComponent'
import Spinner from './Spinner'

function LoadingComponent({ children, isLoading, error = null }) {
  if (isLoading) {
    return <Spinner />
  }

  if (error) {
    return <ErrorComponent message={error.message} />
  }

  return children
}
export default LoadingComponent

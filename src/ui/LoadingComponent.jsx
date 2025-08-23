import Spinner from './Spinner'

function LoadingComponent({ children, isLoading, error = {} }) {
  if (isLoading) {
    return <Spinner />
  }

  if (error) return <span>{error}</span>

  return children
}
export default LoadingComponent

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <ErrorBoundary
      FallbackComponent={<ErrorFallBack />}
      onReset={() => window.location.replace('/')}
    > */}
    <App />
    {/* </ErrorBoundary> */}
  </StrictMode>
)

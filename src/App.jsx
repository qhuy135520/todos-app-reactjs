import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import GlobalStyles from './styles/GlobalStyles'

import Dashboard from './pages/Dashboard'

import Login from './pages/Login'
import PageNotFound from './pages/PageNotFound'
import Account from './pages/Account'
import Users from './pages/Users'

import AppLayout from './ui/AppLayout'
import { Toaster } from 'react-hot-toast'

import ProtectedRoute from './ui/ProtectedRoute'
import { DarkModeProvider } from './context/DarkModeContext'
import Todos from './pages/Todos'
import Categories from './pages/Categories'
import Signup from './pages/Signup'
import { SearchTaskProvider } from './context/SearchTaskContext'
import { Provider } from 'react-redux'
import { store } from './store'
import Calendar from './pages/Calendar'
import { Suspense } from 'react'
import Spinner from './ui/Spinner'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
})

export default function App() {
  return (
    <DarkModeProvider>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} />
          <GlobalStyles />
          <BrowserRouter>
            <Suspense fallback={<Spinner />}>
              <Routes>
                <Route
                  element={
                    <ProtectedRoute>
                      <AppLayout />
                    </ProtectedRoute>
                  }
                >
                  <Route index element={<Navigate replace to='dashboard' />} />
                  <Route index path='dashboard' element={<Dashboard />} />

                  <Route
                    path='todos'
                    element={
                      <SearchTaskProvider>
                        <Todos />
                      </SearchTaskProvider>
                    }
                  />

                  <Route path='categories' element={<Categories />} />
                  <Route path='account' element={<Account />} />
                  <Route path='calendar' element={<Calendar />} />
                </Route>
                <Route path='signup' element={<Signup />} />
                <Route path='login' element={<Login />} />
                <Route path='*' element={<PageNotFound />} />
              </Routes>
            </Suspense>
          </BrowserRouter>
          <Toaster
            position='top-center'
            gutter={12}
            containerStyle={{ margin: '8px' }}
            toastOptions={{
              success: {
                duration: 3000,
              },
              error: {
                duration: 5000,
              },
              style: {
                fontSize: '16px',
                maxWidth: '500px',
                padding: '16px 24px',
                backgroundColor: 'var(--color-grey-0)',
                color: 'var(--color-grey-700)',
              },
            }}
          />
        </QueryClientProvider>
      </Provider>
    </DarkModeProvider>
  )
}

import { createContext, useContext, useState } from 'react'

const SearchTaskContext = createContext()

export function SearchTaskProvider({ children }) {
  const [query, setQuery] = useState('')

  return (
    <SearchTaskContext.Provider value={{ query, setQuery }}>
      {children}
    </SearchTaskContext.Provider>
  )
}

export const useSearch = () => useContext(SearchTaskContext)

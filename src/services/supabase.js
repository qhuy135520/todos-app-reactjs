import { createClient } from '@supabase/supabase-js'
export const supabaseUrl = 'https://yumraydeuzfdzysitgsy.supabase.co'
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl1bXJheWRldXpmZHp5c2l0Z3N5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU2ODk0MDYsImV4cCI6MjA3MTI2NTQwNn0.e8MRZLYzQjOuLpZN7Zy67nnz2SJtgTXDd76uKKUrMMQ'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase

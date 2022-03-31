import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { AppRoutes } from './Routes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <AppRoutes/>
  )
}

export default App

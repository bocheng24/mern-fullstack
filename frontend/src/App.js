import React from 'react'
import { 
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

import Dashboard from './pages/dashboard'
import Signin from './pages/signin'
import Signup from './pages/signup'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Dashboard /> } />
        <Route path='/signin' element={ <Signin /> } />
        <Route path='/signup' element={ <Signup /> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App

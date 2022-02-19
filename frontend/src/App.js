import React from 'react'
import { 
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

import Dashboard from './components/dashboard/dashboard'
import Signin from './components/authentication/signin'
import Signup from './components/authentication/signup'

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

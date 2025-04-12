import React from 'react'
import Login from './components/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import SignUp from './components/SignUp'
import Nav from './components/Nav'
import Admin from './components/admin'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Nav />
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/admin' element={<Admin />} />
     </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App

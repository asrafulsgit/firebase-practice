import React from 'react'
import Login from './components/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import SignUp from './components/SignUp'
import Nav from './components/Nav'
import Admin from './components/admin'
import Image from './components/Image'
import Update_Firestore_database from './components/update/Update_Firestore_database'
import Update_Realtime_databse from './components/update/Update_Realtime_databse'

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
      <Route path='/image' element={<Image />} />

      <Route path='/update/realtime/:username' element={<Update_Realtime_databse />} /> // update realtime database
      <Route path='/update/firestore/:id' element={<Update_Firestore_database />} /> // update realtime database
     </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App

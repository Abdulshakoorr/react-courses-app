import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Footer from './Components/Footer'

import Header from './Components/Header'
import Accounts from './Pages/Accounts'
import Home from './Pages/Home'
import Info from './Pages/Info'
import Profile from './Pages/Profile'
// import Records from './Pages/Upload'
import SignUp from './Pages/SignUp'
import Courses from './Pages/Courses'
import Upload from './Pages/Upload'
import Login from './Pages/Login'
const App = () => {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/account' element={<Accounts/>}/>
        <Route path='/courses' element={<Courses/>}/>
        <Route path='/info' element={<Info/>}/>
        <Route path='/profile:id' element={<Profile/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/upload' element={<Upload/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
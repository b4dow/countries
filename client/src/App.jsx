import React from 'react'
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './views/Home/Home'
import Detail from './views/Detail/Detail'
import Create from './views/Form/Form'
import Landing from './views/Landing/Landing'
import './App.css'

const App = () => {
  const { pathname } = useLocation()
  return (
    <div className='App'>
      {pathname !== '/' && <Navbar />}
      <Routes>
        <Route path='/' element={<Landing />} />
        {pathname}
        <Route path='/home' element={<Home />} />
        <Route path='/home/:id' element={<Detail />} />
        <Route path='/create' element={<Create />} />
      </Routes>
    </div>
  )
}

export default App

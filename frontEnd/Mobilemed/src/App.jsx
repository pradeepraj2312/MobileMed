import React from 'react'
import { AnimatePresence } from 'framer-motion';
import Landing from './pages/landing';
import Main from './pages/main';
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Login from './pages/Login';
import Signup from './pages/Signup'

function App() {
  return (
    <div>
      <BrowserRouter>
      <AnimatePresence mode='wait'>
        <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/landing'element={<Landing/>} />
        <Route path='/landing/login' element={<Login/>}/>
        <Route path='/landing/signup' element={<Signup/>}/>
        

      </Routes>
      </AnimatePresence>
      
      </BrowserRouter>
    </div>
  )
}

export default App
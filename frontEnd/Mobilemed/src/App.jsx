import React from 'react'
import { AnimatePresence } from 'framer-motion';
import Landing from './components/landing'
import Main from './components/main'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Login from './components/Login';
function App() {
  return (
    <div>
      <BrowserRouter>
      <AnimatePresence mode='wait'>
        <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/landing'element={<Landing/>} />
        <Route path='/login' element={<Login/>}/>
      </Routes>
      </AnimatePresence>
      
      </BrowserRouter>
    </div>
  )
}

export default App
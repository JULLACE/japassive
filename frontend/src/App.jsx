import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'

import api from './services/api'
import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  const [dict, setDict] = useState([])

  useEffect(() => {
    api.getWords()
      .then(res => {
        setDict(res.words)
      })
  }, [])

  return (
    <div className='main'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home dict={dict} />} />
            <Route path='about' element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <div></div>
    </div>
  )
}

export default App

import QuestionDisplay from './components/QuestionDisplay'
import Navbar from './components/Navbar'

import api from './services/api'
import { useEffect, useState } from 'react'

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
      <Navbar />
      <QuestionDisplay dict={dict} />
      <div></div>
    </div>
  )
}

export default App

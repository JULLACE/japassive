import QuestionDisplay from "./components/QuestionDisplay"

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
    <div className="app-box">
      <QuestionDisplay dict={dict} />
    </div>
  )
}

export default App

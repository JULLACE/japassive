import QuestionDisplay from "./components/QuestionDisplay"
import AnswerBox from "./components/AnswerBox"

import api from './services/api'
import { useEffect } from 'react'

function App() {

  useEffect(() => {
    api.getWords()
    .then(res => console.log(res))
  }, [])

  return (
    <div className="app-box">
      <QuestionDisplay />
      <AnswerBox />
    </div>
  )
}

export default App

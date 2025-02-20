import '../css/qbox.css'
import { useEffect, useState } from 'react'
import { bind, toHiragana } from 'wanakana'

const QuestionDisplay = ({ dict }) => {
    const [answer, setAnswer] = useState('')
    const [question, setQuestion] = useState('')
    const [correct, setCorrect] = useState('')
    const [resultState, setResultState] = useState(true)

    const sendAnswer = (e) => {
        e.preventDefault()

        if (answer === '') {
            // Handle empty answer string case (maybe highlight text box)
            return
        }

        if (resultState) checkAnswer()
        else {
            defaultStyles()
            changeQuestion()
        }

        setResultState(!resultState)
    }

    const checkAnswer = () => {
        document.getElementById('ans').readOnly = true

        if (answer === toHiragana(correct)) {
            document.getElementById('ques').className = 'q-box q-box-correct'
        }
        else {
            setQuestion(`err... ${correct}`)
            document.getElementById('ques').className = 'q-box q-box-wrong'
        }
    }

    const defaultStyles = () => {
        document.getElementById('ans').readOnly = false
        document.getElementById('ques').className = 'q-box'
    }

    const changeQuestion = () => {
        let selectedWord = dict[Math.floor(Math.random() * dict.length)]
        let text = selectedWord.kanji && selectedWord.kanji.length
            ? selectedWord.kanji[0].text
            : selectedWord.kana[0].text
        
        setQuestion(text)
        setCorrect(selectedWord.answer)
        setAnswer('')
    }

    useEffect(() => { bind(document.getElementById('ans')) }, [])
    useEffect(() => { if (dict.length) changeQuestion() }, [dict])

    return (
        <div className="app-box">
            <div id='ques' className="q-box">
                <p> {question} </p>
            </div>
            <div className="a-box">
                <form onSubmit={sendAnswer}>
                    <input 
                        id="ans" 
                        name="answer" 
                        value={answer} 
                        onInput={({target}) => setAnswer(target.value)}
                    />
                </form>
            </div>
        </div>
    )
}

export default QuestionDisplay
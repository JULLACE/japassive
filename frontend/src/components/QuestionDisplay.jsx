import { useEffect, useState } from 'react'
import { bind } from 'wanakana'

const QuestionDisplay = ({ dict }) => {
    const [answer, setAnswer] = useState('')
    const [question, setQuestion] = useState('')

    const sendAnswer = (e) => {
        e.preventDefault()
        changeQuestion()
    }

    const changeQuestion = () => {
        // Eventually this logic will become unnecessary
        // since server will send word + answer cleanly
        let selectedWord = dict[Math.floor(Math.random() * dict.length)]
        let text = selectedWord.kanji && selectedWord.kanji.length
            ? selectedWord.kanji[0].text
            : selectedWord.kana[0].text
        
        setQuestion(text)
        console.log(answer)
    }

    useEffect(() => { bind(document.getElementById('ans')) }, [])
    useEffect(() => { if (dict.length) changeQuestion() }, [dict])

    return (
        <>
            <div className="q-box">
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
        </>
    )
}

export default QuestionDisplay
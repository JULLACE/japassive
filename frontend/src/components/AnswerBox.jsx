import { useState } from 'react'

const AnswerBox = () => {
    const [answer, setAnswer] = useState('')

    const sendAnswer = (e) => {
        e.preventDefault()   
    }

    return (
        <div className="a-box">
            <form onSubmit={sendAnswer}>
                <input name="answer" value={answer} onChange={({target}) => setAnswer(target.value)}/>
            </form>
        </div>
    )
}

export default AnswerBox
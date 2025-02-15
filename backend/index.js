const express = require('express')
const cors = require('cors')
const jmdict = require('./data/short-verbs.json')
const { convert } = require('./utils/converter')

const app = express()
app.use(express.json())
app.use(cors())

app.get('/', (request, response) => {
    response.send('<h1> im breathing...</h1>')
})

app.get('/words', (request, response) => {
    let res = { words: [] }

    jmdict['words'].forEach(word => {
        let text = word.kana[0].text
        let ans = convert(text, word.partOfSpeech)
        res.words.push({ 'kanji': word.kanji, 'kana': word.kana, 'ans': ans})
    })

    response.json(res)
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`)
})
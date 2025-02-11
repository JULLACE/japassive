const express = require('express')
const cors = require('cors')
const jmdict = require('./data/short-verbs.json')

const app = express()
app.use(express.json())
app.use(cors())

app.get('/', (request, response) => {
    response.send('<h1> im breathing...</h1>')
})

app.get('/words', (request, response) => {
    response.json(jmdict)
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`)
})
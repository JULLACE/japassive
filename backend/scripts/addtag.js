const dict = require('../data/all-verbs.json')
const fs = require('fs')

// Puts JLPT word data (from CSV) into a set
const jlpt = fs.readFileSync('../data/jlpt/n5.csv',
    { encoding: 'utf8', flag: 'r' }
)
const rows = jlpt.split('\r\n')
const data = rows.map(row => {
    return row.split(',', 2)
})

const wordSet = new Set()
data.forEach(wordArray => wordArray.forEach(word => wordSet.add(word)))

for (const index in dict.words) {
    let word = dict.words[index]
    let text = word.kanji && word.kanji.length
        ? word.kanji[0].text
        : word.kana[0].text

    if (wordSet.has(text))
        word = { ...word, 'tags': ['n5'] }
    else 
        word = { ...word, 'tags': [] }

    dict.words[index] = word
}

fs.writeFile('../data/all-verbs.json', JSON.stringify(dict), (err) => {
    if (err) throw err
    else console.log('Sucessfuly saved all verbs to all-verbs.json')
})



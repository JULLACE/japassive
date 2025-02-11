// This file assumes JMDict (json) common english is installed
// Found here: https://github.com/scriptin/jmdict-simplified
const dict = require('./JMdict/jmdict-eng-common.json')
const fs = require('fs')

let allJSON = { 'words': [] }
let shortJSON = { 'words': [] }


for (const index in dict.words) {
    let word = dict.words[index]

    let posArray = word.sense[0].partOfSpeech
    if ((posArray.includes('vi') || posArray.includes('vt')) && !posArray.includes('vs')) {
        let trimmedWord = { 'kanji': word.kanji, 'kana': word.kana, 'partOfSpeech': word.sense[0].partOfSpeech }
        
        allJSON.words.push(trimmedWord)
        if (index < 5000) shortJSON.words.push(trimmedWord)
    }
}

fs.writeFile('../data/all-verbs.json', JSON.stringify(allJSON), (err) => {
    if (err) throw err
    else console.log('Sucessfuly saved all verbs to ./all-verbs.json')
})

fs.writeFile('../data/short-verbs.json', JSON.stringify(shortJSON), (err) => {
    if (err) throw err
    else console.log('Sucessfuly saved shorter list of verbs to ./short-verbs.json')
})
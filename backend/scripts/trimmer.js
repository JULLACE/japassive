// This file assumes JMDict (json) common english is installed
// Found here: https://github.com/scriptin/jmdict-simplified
const dict = require('./JMdict/jmdict-eng-common.json')
const fs = require('fs')

let allJSON = { 'words': [] }
let shortJSON = { 'words': [] }


for (const index in dict.words) {
    let posArray = dict.words[index].sense[0].partOfSpeech
    if ((posArray.includes('vi') || posArray.includes('vt')) && !posArray.includes('vs')) {
        let word = dict.words[index]
        
        allJSON.words.push(word)
        if (index < 5000) shortJSON.words.push(word)
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
const dict = require('./JMdict/jmdict-eng-common.json')
const fs = require('fs')

let newJSON = { 'words': [] }

let num = 0
for (word in dict.words) {

    let posArray = dict.words[word].sense[0].partOfSpeech
    if ((posArray.includes('vi') || posArray.includes('vt')) && !posArray.includes('vs')) {
        newJSON.words.push(dict.words[word])
    }

    if (num === 500) break
    else num += 1
}

newJSON.words.forEach(word => word.kanji && word.kanji.length ? console.log('kj:', word.kanji) : console.log('ka:', word.kana))

// newJSON.words.forEach(word => {
//     if (word.kana[0].text === 'ゴロゴロ') {
//         console.log(word.sense[0].partOfSpeech)
//     }
// })

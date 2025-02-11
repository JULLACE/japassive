/*
    To make passive forms:
    - ru-verbs: Drop the final -ru and add -rare-ru
        食べ[る]　ー＞　食べ[られる]
    - u-verbs: Drop the final -u and add -are-ru
        行[く]　ー＞　行[かれる]
        話[す]　ー＞　話[される]
        待[つ]　ー＞　待[たれる]
        買[う]　ー＞　買[われる]
    - irregulars:
        くる　ー＞　こられる
        する　ー＞　される
*/
/*
    To make causative forms:
    - ru-verbs: Drop the final -ru and add -sase-ru
        食べ[る]　ー＞　食べ[させる]
    - u-verbs: Drop the final -u and add -ase-ru
        行[く]　ー＞　行[かせる]
        話[す]　ー＞　話[させる]
        待[つ]　ー＞　待[たせる]
        買[う]　ー＞　買[わせる]
    - irregulars:
        くる　ー＞　こさせる
        する　ー＞　させる
*/
/*
    To make causative-passive forms:
    - ru-verbs: Drop the final -ru and add -sase-rare-ru
        食べ[る]　ー＞　食べ[させられる]
    - u-verbs that end with す: Drop -u and add -ase-rare-ru
        話[す] ー＞　話[させられる]
    - all other u-verbs: Drop the final -u and add -asare-ru
        行[く]　ー＞　行[かされる]
        待[つ]　ー＞　待[たされる]
        買[う]　ー＞　買[わされる]
    - irregulars:
        くる　ー＞　こさせられる
        する　ー＞　させられる

    - note: 
        although forms like 書かせられる or 読ませられる are gramatically correct
        it is much more common with -asare, like 書かされる
*/

const uaTable = new Map([
    ['う', 'わ'],
    ['く', 'か'],
    ['ぐ', 'が'],
    ['す', 'さ'],
    ['つ', 'た'],
    ['ぬ', 'な'],
    ['ふ', 'は'],
    ['む', 'ま'],
    ['る', 'ら'],
    ['ぶ', 'ば'],

    // These are unlikely / may not exist, but just in case.
    ['づ', 'だ'],
    ['ず', 'ざ'],
    ['ぷ', 'ぱ'],
]);

const uExample = [
    '読む',
    '泳ぐ',
    '立つ',
    '行く',
    '買う',
    '話す',
    '遊ぶ',
]

const uConvertPassive = (word) => {
    if (word === 'くる') return 'こられる'
    else if (word === 'する') return 'される'

    let lastLetter = word[word.length -1]
    let slicedWord = word.slice(0, -1)

    return `${slicedWord}${uaTable.get(lastLetter)}れる`
}

const uConvertCausative = (word) => {
    if (word === 'くる') return 'こさせる'
    else if (word === 'する') return 'させる'

    let lastLetter = word[word.length -1]
    let slicedWord = word.slice(0, -1)

    return `${slicedWord}${uaTable.get(lastLetter)}せる`
}

const uConvertCausativePassive = (word) => {
    if (word === 'くる') return 'こさせられる'
    else if (word === 'する') return 'させられる'

    let lastLetter = word[word.length -1]
    let slicedWord = word.slice(0, -1)

    if (lastLetter === 'す') 
        return `${slicedWord}させられる`
    else 
        return `${slicedWord}${uaTable.get(lastLetter)}される`
}

const ruCheck = (word) => {
    
}



// uExample.forEach(word => console.log(word, '->', uConvertPassive(word)))
// uExample.forEach(word => console.log(word, '->', uConvertCausative(word)))
uExample.forEach(word => console.log(word, '->', uConvertCausativePassive(word)))




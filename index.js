import fs from 'fs'

const wordsText = fs.readFileSync("words.txt").toString()
const arr0 = wordsText.split(/[\W\n]+/)
const arr = arr0.filter(it => it != '4' && it != 's')

fs.writeFileSync("words2.txt", arr.join(" "))
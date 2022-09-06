const { template } = require('@babel/core')

function fillStartWord(startWord, word) {
  if (word === undefined){
return undefined
} 
else if(word === null){
return undefined
}
else{
return startWord + word
}

}
module.exports = fillStartWord

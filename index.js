
function theBeatlesPlay(musicians, instruments) {
  var sentences = []

  for( let i = 0; i < musicians.length; i++){
    sentences.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return sentences
}

function johnLennonFacts(facts){
  for(let i = 0; i < facts.length; i++)
  {
    facts[i] = facts[i] + "!!!"
  }
}

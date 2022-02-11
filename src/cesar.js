const letters = 'abcdefghijklmnopqrstuvwxyz'

const getEncryptedLetterIndex = (index, key) => {
  return index + key >= 26 ? (index + key) % 26 : (index + key) 
}

const getDecryptedLetterIndex = (index, key) => {
  let decryptedIndex = index - key
  
  if(decryptedIndex < 0) decryptedIndex = (decryptedIndex % 26)+ 26
  else if(decryptedIndex >= 26) decryptedIndex = decryptedIndex % 26

  
  return decryptedIndex
}

export const encrypt = (word, key) => {
  word = word.toLowerCase()
  let encryptedWord = ''

  for(const i of word){
    const index = letters.indexOf(i)
    if(index != -1){
      const encryptedIndex = getEncryptedLetterIndex(index, key)
      encryptedWord += letters[encryptedIndex]
    } else {
      encryptedWord += i
    }
    
  }
  return encryptedWord
}

export const decrypt = (word, key) => {
  word = word.toLowerCase()
  let decryptedWord = ''
  for(const i of word){
    const index = letters.indexOf(i)
    if(index != -1){
      const decryptedIndex = getDecryptedLetterIndex(index, key)
      decryptedWord += letters[decryptedIndex]
    } else {
      decryptedWord += i
    }
  }
  
  return decryptedWord
}

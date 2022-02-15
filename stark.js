import {encrypt, decrypt} from "./src/cesar.js";

const EncryptForm = () => {
  
  return `<div class="container mb-5 mt-5">
           
                <div class="uk-card uk-card-default uk-width-*">

                    <div class="uk-card-header text-center">
                        <h3 id="formTitle" class="uk-card-title">Chiffrement César</h3>
                    </div>

                    <div class="uk-card-body">
                       
                        <div class="form-group">
                            <label for="message">Message à chiffrer</label>
                            <input type="text" id="to-encrypt" class="form-control uk-input" name="message">
                        </div>
                        <div class="form-group">
                            <label for="message-key">Clé</label>
                            <input id="to-encrypt-key" type="number" class="form-control uk-input" name="message-key">
                        </div>
                    </div>

                    <div class="uk-card-footer">
                        <div class="row">
                            <button id="encrypt-btn" class="btn uk-button-primary" >Chiffrer</button>
                          
                        </div>
                      
                    </div>
                    <p id="encrypted-label" class="hidden"></p>
                    <p id="encrypted-content" class="text-success text-center hidden"></p>

                </div>
          
          </div>`
}

const DecryptForm = () => {

  return `<div class="container mb-5 mt-5">
           
                <div class="uk-card uk-card-default uk-width-*">

                    <div class="uk-card-header text-center">
                        <h3 id="formTitle" class="uk-card-title">Déchiffrement César</h3>
                    </div>

                    <div class="uk-card-body">
                       
                        <div class="form-group">
                            <label for="message">Message à déchiffrer</label>
                            <input type="text" id="to-decrypt" class="form-control uk-input" name="message">
                        </div>
                        <div class="form-group">
                            <label for="message-key">Clé</label>
                            <input id="to-decrypt-key" type="number" class="form-control uk-input" name="message-key">
                        </div>
                    </div>

                    <div class="uk-card-footer">
                        <div class="row">
                            <button id="decrypt-btn" class="btn uk-button-primary" >Déchiffrer</button>
                          
                        </div>
                      
                    </div>
                    <p id="clear-label" class="hidden"></p>
                    <p id="clear-content" class="text-success text-center hidden"></p>

                </div>
          
          </div>`
}

const HomePage = () => {
  return '<h1 class="mainTitle">Welcome to Ceasar\'s Palace !</h1>' + EncryptForm() + '<br>' + DecryptForm()
}

const removeClassFromElement = (elementId, className) => {
  const element = document.getElementById(elementId)
  element.classList.remove(className)
}

const addContentToElement = (elementId, content) => {
  const element = document.getElementById(elementId)
  element.innerHTML = content
}

const showCryptedMessage = () => {

  const _encryptButton = document.getElementById('encrypt-btn')

  _encryptButton.addEventListener('click', () => {

    const message = document.getElementById('to-encrypt').value
    const key = document.getElementById('to-encrypt-key').value

    const encryptedMessage = encrypt(message, parseInt(key))

    addContentToElement('encrypted-label', 'Message crypté : ')
    removeClassFromElement('encrypted-label', 'hidden')

    addContentToElement('encrypted-content', encryptedMessage)
    removeClassFromElement('encrypted-content', 'hidden')
  
  })
}

const showClearMessage = () => {

  const _decryptButton = document.getElementById('decrypt-btn')

  _decryptButton.addEventListener('click', () => {

    const message = document.getElementById('to-decrypt').value
    const key = document.getElementById('to-decrypt-key').value

    const clearMessage = decrypt(message, parseInt(key))

    addContentToElement('clear-label', 'Message clair : ')
    removeClassFromElement('clear-label', 'hidden')

    addContentToElement('clear-content', clearMessage)
    removeClassFromElement('clear-content', 'hidden')
  
  })
}

document.querySelector('#app').innerHTML = HomePage()

showCryptedMessage()
showClearMessage()
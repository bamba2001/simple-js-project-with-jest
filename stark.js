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
                            <input type="text" id="to-crypt" class="form-control uk-input" name="message">
                        </div>
                        <div class="form-group">
                            <label for="message-key">Clé</label>
                            <input id="message-key" type="number" class="form-control uk-input" name="message-key">
                        </div>
                    </div>

                    <div class="uk-card-footer">
                        <div class="row">
                            <button id="encrypt" class="btn uk-button-primary" >Chiffrer</button>
                          
                        </div>
                      
                    </div>
                    <p id="crypted-label" class="hidden"></p>
                    <p id="crypted-content" class="text-success text-center hidden" id="crypted-message"></p>

                </div>
          
          </div>`
}

// const DecryptForm = () => {
//   return `<div class="container mb-5 mt-5">
//             <form id="sign-in-form">
//                 <div class="uk-card uk-card-default uk-width-*">

//                     <div class="uk-card-header text-center">
//                         <h3 class="uk-card-title">Déchiffrement César</h3>
//                     </div>

//                     <div class="uk-card-body">
//                         <p class="text-danger text-center hidden" id="error-msg"></p>
//                         <div class="form-group">
//                             <label for="username">Message à déchiffrer</label>
//                             <input type="text" id="username" class="form-control uk-input" name="login">
//                         </div>
//                         <div class="form-group">
//                             <label for="password">Clé</label>
//                             <input id="password" type="number" class="form-control uk-input" name="password">
//                         </div>
//                     </div>

//                     <div class="uk-card-footer">
//                         <div class="row">
//                             <button type="submit" class="btn uk-button-primary btn-block" >Déchiffrer</button>
//                         </div>
//                     </div>
//                 </div>
//             </form>
//           </div>`
// }

const MainPage = () => {
  return `<div class="container mb-5 mt-5 main-page">
            <div class="uk-card uk-card-default uk-width-1-1@m mb-3">
              <div class="uk-card-header text-center">
                  <h3 class="uk-card-title">Welcome to Ceasar's Palace</h3>
              </div>
              <div class="uk-card-body text-center">

              <button id="gotocrypt" class="btn"> Faire un chiffrement </button>

              <br>

              <button id="gotodcrypt" class="btn"> Faire un déchiffrement </button>

              </div>
            </div>
          </div>`
}

const removeClassFromElement = (elementId, className) => {
  const element = document.getElementById(elementId)
  element.classList.remove(className)
}

const addClassToElement = (elementId, className) => {
  const element = document.getElementById(elementId)
  element.classList.add(className)
}

const addContentToElement = (elementId, content) => {
  const element = document.getElementById(elementId)
  element.innerHTML = content
}

const switcher = () => {
  const _goToCryptButton = document.getElementById('gotocrypt')
  const _goToDecryptButton = document.getElementById('gotodcrypt')

  _goToCryptButton.addEventListener('click', () => {
    document.querySelector('#app').innerHTML = EncryptForm()
  })

  _goToDecryptButton.addEventListener('click', () => {
    document.querySelector('#app').innerHTML = DecryptForm()
  })

}

const showCryptedMessage = () => {

  const _encryptButton = document.getElementById('encrypt')

  _encryptButton.addEventListener('click', () => {
    const message = document.getElementById('to-crypt').value
    const key = document.getElementById('message-key').value

    const mm = encrypt(message, parseInt(key))

    addContentToElement('crypted-label', 'Message crypté : ')
    removeClassFromElement('crypted-label', 'hidden')

    addContentToElement('crypted-content', mm)
    removeClassFromElement('crypted-content', 'hidden')
  
  })




}



document.querySelector('#app').innerHTML = EncryptForm()

//switcher()

showCryptedMessage()
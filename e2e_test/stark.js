
// module.exports = {
//     test: client => {
//         client
//             .url('http://127.0.0.1:5500/vite-project/index.html')
//             .waitForElementVisible('#app', 10 * 1000)
//             .assert.visible('#sign-in-form')
//             .assert.containsText('#sign-in-form .uk-card-title', 'Login page')
//             .assert.visible('#username')
//             .setValue('input[type=text]', 'alioune')
//             .assert.visible('#password')
//             .setValue('input[type=password]', 'azerty')
//             .click('button[type=submit]')
//             .waitForElementVisible('#error-msg', 10 * 1000)
//             .assert.containsText('#error-msg', 'Username or password incorrect')
//             .setValue('input[type=text]', 'alioune')
//             .assert.visible('#password')
//             .setValue('input[type=password]', 'passer')
//             .click('button[type=submit]')
//             .waitForElementVisible('#app .main-page', 10 * 1000)
//             .assert.containsText('#app .uk-card-title', 'Jotaro kujo')
//             .assert.visible('#app .img-fluid')
//             .end()
//     }
// }

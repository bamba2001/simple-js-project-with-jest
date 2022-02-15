
module.exports = {
    TestCeasar: client => {
        client
            .url('http://localhost:4173/')

            .assert.textContains('#app .mainTitle', 'Welcome to Ceasar\'s Palace !')

            .assert.visible('#to-encrypt')
            .assert.visible('#to-encrypt-key')
            .assert.visible('#encrypt-btn')

            .assert.visible('#to-decrypt')
            .assert.visible('#to-decrypt-key')
            .assert.visible('#decrypt-btn')

            .setValue('#to-encrypt', 'stark is the best')
            .setValue('#to-encrypt-key', '15')
            .click('#encrypt-btn')
            .assert.textContains('#encrypted-content', 'hipgz xh iwt qthi')

            .setValue('#to-decrypt', 'hipgz xh iwt qthi')
            .setValue('#to-decrypt-key', '15')
            .click('#decrypt-btn')
            .assert.textContains('#clear-content', 'stark is the best')

            .end()
    }
}


module.exports = {
    TestCeasar: client => {
        client
            .url('http://localhost:4173/')
            .assert.containsText('#app .mainTitle', 'Welcome to Ceasar\'s Palace !')
            .end()
    }
}

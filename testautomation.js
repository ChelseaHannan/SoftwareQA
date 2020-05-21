var inputs = require('../testAssets/inputs')
var myPage

module.exports = {
    beforeEach: browser => {
        myPage = browser.page.loanPage()
        myPage.navigate()
    },

    after: browser => {
        myPage.end()
    },

    'test everything': browser => {
            inputs.forEach(test => {
                myPage
                    .allTheScreens(test)
            })          
    }
}
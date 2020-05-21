var myCommands = {
    allTheScreens: function (data) {
        this
            .click('@homeBtn')
            .click('@loanTypes')
            .setValue('@loanTypes', data.loan)
            .setValue('@propertyTypes', data.property)
            .click('@homeBtn')
            .setValue('@cityInput', 'New York')
            .click('@cityBtn')
            .click(data.property2)
            .click(data.yesOrNo)
            .click(data.yesOrNo1)
            .setValue('@estPrice', '$200,000')
            .setValue('@estDown', '$20,000')
            .click('@homeBtn')
            .click(data.credit)
            .click(data.bankOrFore)
            .setValue('@address1', '123 street')
            .setValue('@address3', 'NY, New York')
            .click('@homeBtn')
            .setValue('@firstName', 'name')
            .setValue('@lastName', 'name')
            .setValue('@email', 'email')
            .click('@homeBtn')
            .click(data.sendOrNot)
            .click('@homeBtn')
            .verify.containsText('@h1Text', 'Home Loan Wizard')
        return this
    }
}

module.exports = {
    url: 'http://192.168.1.139:3000/',
    commands: [myCommands],
    elements: {
        homeBtn: {selector: '//*/a/button', locateStrategy: 'xpath'},

        // screen two
        loanTypes: {selector: '//*[@id="loanTypes"]', locateStrategy: 'xpath'},
        propertyTypes: {selector: '//*[@id="propertyTypes"]', locateStrategy: 'xpath'},
        // nextBtn: {selector: '//*/a/button', locateStrategy: 'xpath'},

        // screen three
        loan1: {selector: '//*[@id="loanTypes"]/option[1]', locateStrategy: 'xpath'},
        loan2: {selector: '//*[@id="loanTypes"]/option[2]', locateStrategy: 'xpath'},
        loan3: {selector: '//*[@id="loanTypes"]/option[3]', locateStrategy: 'xpath'},

        // one of five different buttons for property type selection, selectors for others are commented at bottom of page
        propertyType: {selector: '//*[@id="propertyTypes"]/option[1]', locateStrategy: 'xpath'},

        cityInput: {selector: '//*/input[@placeholder="city name"]', locateStrategy: 'xpath'},
        cityBtn: {selector: '//*/button[@class="wTwo-btn"]', locateStrategy: 'xpath'},

        // property2 params:
        phBtn: {selector: '//*/a[1]', locateStrategy: 'xpath'},
        rentalBtn: {selector: '//*/a[2]', locateStrategy: 'xpath'},
        secondBtn: {selector: '//*/a[3]', locateStrategy: 'xpath'},

        yesBtn: {selector: '//*/a[1]/button', locateStrategy: 'xpath'},
        noBtn: {selector: '//*/a[2]/button', locateStrategy: 'xpath'},

        estPrice: {selector: '//*/input[1]', locateStrategy: 'xpath'},
        estDown: {selector: '//*/input[2]', locateStrategy: 'xpath'},

        excellent: {selector: '//*/a[1]/button', locateStrategy: 'xpath'},
        good: {selector: '//*/a[2]/button', locateStrategy: 'xpath'},
        fair: {selector: '//*/a[3]/button', locateStrategy: 'xpath'},
        poor: {selector: '//*/a[4]/button', locateStrategy: 'xpath'},

        noBankruptcy: {selector: '//*/a[1]/button', locateStrategy: 'xpath'},
        bankruptcy: {selector: '//*/a[2]/button', locateStrategy: 'xpath'},
        foreclosure: {selector: '//*/a[3]/button', locateStrategy: 'xpath'},
        both: {selector: '//*/a[4]/button', locateStrategy: 'xpath'},

        address1: {selector: '//*[@id="addressOne"]', locateStrategy: 'xpath'},
        address3: {selector: '//*[@id="addressThree"]', locateStrategy: 'xpath'},

        firstName: {selector: '//*[@id="first"]', locateStrategy: 'xpath'},
        lastName: {selector: '//*[@id="last"]', locateStrategy: 'xpath'},
        email: {selector: '//*[@id="email"]', locateStrategy: 'xpath'},

        send: {selector: '//*/a[1]/button', locateStrategy: 'xpath'},
        startAgain: {selector: '//*/a[2]/button', locateStrategy: 'xpath'},

        h1Text: {selector: '//*/h1[@name="promptText"]', locateStrategy: 'xpath'}
 
    }
}

        // '//*[@id="propertyTypes"]/option[2]', 
        // '//*[@id="propertyTypes"]/option[3]', 
        // '//*[@id="propertyTypes"]/option[4]', 
        // '//*[@id="propertyTypes"]/option[5]',
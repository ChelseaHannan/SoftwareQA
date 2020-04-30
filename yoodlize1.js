module.exports = {
    beforeEach: browser => {
        browser.url('https://alpha.yoodlize.com/')
    }, 

    after: browser => {
        browser.end()
    },

    // Test 'see all' link for each category on home page

    'See all RECREATIONAL VEHICLES': browser => {
        browser
            .useXpath()
            .click('//*[@id="rebass-provider"]/div/div[1]/div/div[3]/div[1]/div[1]/a/div')
            .pause(1000)

            // assert we went to the RECREATIONAL VEHICLES category page
            .assert.containsText('//*[@id="rebass-provider"]/div/div[2]/div/div[1]/div[1]/div/div[2]/div', 'category: Recreational Vehicles')

    },

    'See all OUTDOOR GEAR': browser => {
        browser
            .useXpath()
            .click('//*[@id="rebass-provider"]/div/div[1]/div/div[3]/div[1]/div[5]/a/div')
            .pause(1000)

            // assert we went to the OUTDOOR GEAR category page
            .assert.containsText('//*[@id="rebass-provider"]/div/div[2]/div/div[1]/div[1]/div/div[2]/div', 'category: Outdoor Gear')
    },

    'See all ELECTRONICS': browser => {
        browser
            .useXpath()
            .click('//*[@id="rebass-provider"]/div/div[1]/div/div[3]/div[1]/div[8]/a/div')
            .pause(1000)

            // assert we went to the ELECTRONICS category page
            .assert.containsText('//*[@id="rebass-provider"]/div/div[2]/div/div[1]/div[1]/div/div[2]/div', 'category: Electronics')
    },

    'See all PARTY & WEDDING EQUIPMENT': browser => {
        browser
            .useXpath()
            .click('//*[@id="rebass-provider"]/div/div[1]/div/div[3]/div[5]/div[1]/a/div')
            .pause(1000)

            // assert we went to the PARTY & WEDDING EQUIPMENT category page
            .assert.containsText('//*[@id="rebass-provider"]/div/div[2]/div/div[1]/div[1]/div/div[2]/div', 'category: Party & Wedding Equipment')
    },

    'See all TOOLS': browser => {
        browser
            .useXpath()
            .click('//*[@id="rebass-provider"]/div/div[1]/div/div[3]/div[5]/div[4]/a/div')
            .pause(1000)

            // assert we went to the TOOLS category page
            .assert.containsText('//*[@id="rebass-provider"]/div/div[2]/div/div[1]/div[1]/div/div[2]/div', 'category: Tools')
    },

    'See all CLOTHING': browser => {
        browser
            .useXpath()
            .click('//*[@id="rebass-provider"]/div/div[1]/div/div[3]/div[5]/div[7]/a/div')
            .pause(1000)

            // assert we went to the CLOTHING category page
            .assert.containsText('//*[@id="rebass-provider"]/div/div[2]/div/div[1]/div[1]/div/div[2]/div', 'category: Clothing')
    },

    'See all HOME & KITCHEN': browser => {
        browser
            .useXpath()
            .click('//*[@id="rebass-provider"]/div/div[1]/div/div[3]/div[5]/div[10]/a/div')
            .pause(1000)

            // assert we went to the HOME & KITCHEN category page
            .assert.containsText('//*[@id="rebass-provider"]/div/div[2]/div/div[1]/div[1]/div/div[2]/div', 'category: Home and Kitchen')
    },

    'See all TOYS & GAMES': browser => {
        browser
            .useXpath()
            .click('//*[@id="rebass-provider"]/div/div[1]/div/div[3]/div[9]/div[1]/a/div')
            .pause(1000)

            // assert we went to the TOYS & GAMES category page
            .assert.containsText('//*[@id="rebass-provider"]/div/div[2]/div/div[1]/div[1]/div/div[2]/div', 'category: Toys and Games')
    },

    'See all LAWN & GARDEN': browser => {
        browser
            .useXpath()
            .click('//*[@id="rebass-provider"]/div/div[1]/div/div[3]/div[9]/div[4]/a/div')
            .pause(1000)

            // assert we went to the LAWN & GARDEN category page
            .assert.containsText('//*[@id="rebass-provider"]/div/div[2]/div/div[1]/div[1]/div/div[2]/div', 'category: Lawn and Garden')
    },

    'See all SPORTING GOODS': browser => {
        browser
            .useXpath()
            .click('//*[@id="rebass-provider"]/div/div[1]/div/div[3]/div[9]/div[7]/a/div')
            .pause(1000)

            // assert we went to the SPORTING GOODS category page
            .assert.containsText('//*[@id="rebass-provider"]/div/div[2]/div/div[1]/div[1]/div/div[2]/div', 'category: Sporting Equipment')
    },

    'See all DVDS & VIDEO GAMES': browser => {
        browser
            .useXpath()
            .click('//*[@id="rebass-provider"]/div/div[1]/div/div[3]/div[9]/div[10]/a/div')
            .pause(1000)

            // assert we went to the DVDS & VIDEO GAMES category page
            .assert.containsText('//*[@id="rebass-provider"]/div/div[2]/div/div[1]/div[1]/div/div[2]/div', 'category: DVDs')
    },

    'See all VENUES': browser => {
        browser
            .useXpath()
            .click('//*[@id="rebass-provider"]/div/div[1]/div/div[3]/div[13]/div[1]/a/div')
            .pause(1000)

            // assert we went to the VENUES category page
            .assert.containsText('//*[@id="rebass-provider"]/div/div[2]/div/div[1]/div[1]/div/div[2]/div', 'category: Venues')
    },

    'See all MUSIC': browser => {
        browser
            .useXpath()
            .click('//*[@id="rebass-provider"]/div/div[1]/div/div[3]/div[13]/div[4]/a/div')
            .pause(1000)

            // assert we went to the MUSIC category page
            .assert.containsText('//*[@id="rebass-provider"]/div/div[2]/div/div[1]/div[1]/div/div[2]/div', 'category: Music')
    },

    'See all BUSINESS EQUIPMENT': browser => {
        browser
            .useXpath()
            .click('//*[@id="rebass-provider"]/div/div[1]/div/div[3]/div[13]/div[7]/a/div')
            .pause(1000)

            // assert we went to the BUSINESS EQUIPMENT category page
            .assert.containsText('//*[@id="rebass-provider"]/div/div[2]/div/div[1]/div[1]/div/div[2]/div', 'category: Business Equipment')
    },

    'See all MISC': browser => {
        browser
            .useXpath()
            .click('//*[@id="rebass-provider"]/div/div[1]/div/div[3]/div[13]/div[10]/a/div')
            .pause(1000)

            // assert we went to the BUSINESS EQUIPMENT category page
            .assert.containsText('//*[@id="rebass-provider"]/div/div[2]/div/div[1]/div[1]/div/div[2]/div', 'category: Misc')
    },

    // Test category buttons on bottom of home page

    'TOOLS button': browser => {
        browser
            .useXpath()
            .click('//*[@id="rebass-provider"]/div/div[1]/div/div[3]/div[15]/div[2]/a[1]/div/div[2]/div')

            // assert we went to the correct category page
            .assert.containsText('//*[@id="rebass-provider"]/div/div[2]/div/div[1]/div[1]/div/div[2]/div', 'category: Tools')
    },

    'OUTDOOR GEAR button': browser => {
        browser
            .useXpath()
            .click('//*[@id="rebass-provider"]/div/div[1]/div/div[3]/div[15]/div[2]/a[2]/div/div[2]/div')

            // assert we went to the correct category page
            .assert.containsText('//*[@id="rebass-provider"]/div/div[2]/div/div[1]/div[1]/div/div[2]/div', 'category: Outdoor Gear')
    },

    'ELECTRONICS button': browser => {
        browser
            .useXpath()
            .click('//*[@id="rebass-provider"]/div/div[1]/div/div[3]/div[15]/div[2]/a[3]/div/div[2]/div')

            // assert we went to the correct category page
            .assert.containsText('//*[@id="rebass-provider"]/div/div[2]/div/div[1]/div[1]/div/div[2]/div', 'category: Electronics')
    },

    'PARTY & WEDDING button': browser => {
        browser
            .useXpath()
            .click('//*[@id="rebass-provider"]/div/div[1]/div/div[3]/div[15]/div[2]/a[4]/div/div[2]/div')

            // assert we went to the correct category page
            .assert.containsText('//*[@id="rebass-provider"]/div/div[2]/div/div[1]/div[1]/div/div[2]/div', 'category: Party & Wedding Equipment')
    },

    'RECREATIONAL VEHICLES button': browser => {
        browser
            .useXpath()
            .click('//*[@id="rebass-provider"]/div/div[1]/div/div[3]/div[15]/div[2]/a[5]/div/div[2]/div')

            // assert we went to the correct category page
            .assert.containsText('//*[@id="rebass-provider"]/div/div[2]/div/div[1]/div[1]/div/div[2]/div', 'category: Recreational Vehicles')
    },

    'CLOTHING button': browser => {
        browser
            .useXpath()
            .click('//*[@id="rebass-provider"]/div/div[1]/div/div[3]/div[15]/div[2]/a[6]/div/div[2]/div')

            // assert we went to the correct category page
            .assert.containsText('//*[@id="rebass-provider"]/div/div[2]/div/div[1]/div[1]/div/div[2]/div', 'category: Clothing')
    },

    'HOME & KITCHEN button': browser => {
        browser
            .useXpath()
            .click('//*[@id="rebass-provider"]/div/div[1]/div/div[3]/div[15]/div[2]/a[7]/div/div[2]/div')

            // assert we went to the correct category page
            .assert.containsText('//*[@id="rebass-provider"]/div/div[2]/div/div[1]/div[1]/div/div[2]/div', 'category: Home and Kitchen')
    },

    'TOYS & GAMES button': browser => {
        browser
            .useXpath()
            .click('//*[@id="rebass-provider"]/div/div[1]/div/div[3]/div[15]/div[2]/a[8]/div/div[2]/div')

            // assert we went to the correct category page
            .assert.containsText('//*[@id="rebass-provider"]/div/div[2]/div/div[1]/div[1]/div/div[2]/div', 'category: Toys and Games')
    },

    'LAWN & GARDEN button': browser => {
        browser
            .useXpath()
            .click('//*[@id="rebass-provider"]/div/div[1]/div/div[3]/div[15]/div[2]/a[9]/div/div[2]/div')

            // assert we went to the correct category page
            .assert.containsText('//*[@id="rebass-provider"]/div/div[2]/div/div[1]/div[1]/div/div[2]/div', 'category: Lawn and Garden')
    },

    'SPORTING GOODS button': browser => {
        browser
            .useXpath()
            .click('//*[@id="rebass-provider"]/div/div[1]/div/div[3]/div[15]/div[2]/a[10]/div/div[2]/div')

            // assert we went to the correct category page
            .assert.containsText('//*[@id="rebass-provider"]/div/div[2]/div/div[1]/div[1]/div/div[2]/div', 'category: Sporting Equipment')
    },

    'DVDS & VIDEO GAMES button': browser => {
        browser
            .useXpath()
            .click('//*[@id="rebass-provider"]/div/div[1]/div/div[3]/div[15]/div[2]/a[11]/div/div[2]/div')

            // assert we went to the correct category page
            .assert.containsText('//*[@id="rebass-provider"]/div/div[2]/div/div[1]/div[1]/div/div[2]/div', 'category: DVDs')
    },

    'VENUES button': browser => {
        browser
            .useXpath()
            .click('//*[@id="rebass-provider"]/div/div[1]/div/div[3]/div[15]/div[2]/a[12]/div/div[2]/div')

            // assert we went to the correct category page
            .assert.containsText('//*[@id="rebass-provider"]/div/div[2]/div/div[1]/div[1]/div/div[2]/div', 'category: Venues')
    },

    'MUSIC button': browser => {
        browser
            .useXpath()
            .click('//*[@id="rebass-provider"]/div/div[1]/div/div[3]/div[15]/div[2]/a[13]/div/div[2]/div')

            // assert we went to the correct category page
            .assert.containsText('//*[@id="rebass-provider"]/div/div[2]/div/div[1]/div[1]/div/div[2]/div', 'category: Music')
    },

    'MISC button': browser => {
        browser
            .useXpath()
            .click('//*[@id="rebass-provider"]/div/div[1]/div/div[3]/div[15]/div[2]/a[14]/div/div[2]/div')

            // assert we went to the correct category page
            .assert.containsText('//*[@id="rebass-provider"]/div/div[2]/div/div[1]/div[1]/div/div[2]/div', 'category: Misc')
    },

    
}
module.exports = {
    beforeEach: browser => {
        browser.url('https://devmountain-qa.github.io/employee-manager/1.0_Version/index.html')
    },

    after: browser => {
        browser.end()
    },

    'Edit_Employee_File': browser => {
        browser
            .click('li[name="employee1"]')
            .clearValue('input[name="nameEntry"]')
            .setValue('input[name="nameEntry"]', ["Chelsea Hannan"]) 
            .clearValue('input[name="phoneEntry"]')
            .setValue('input[name="phoneEntry"]', ["777-777-7777"])
            .clearValue('input[name="titleEntry"]')
            .setValue('input[name="titleEntry"]', ["QA Automation Engineer"])
        browser
            .click('button[name="save"]')
            .pause(5000) 
            // Check if name, phone, and title edits were successful
            .assert.visible('input[name="nameEntry"]')
            .assert.visible('input[name="phoneEntry"]')
            .assert.visible('input[name="titleEntry"]')
            .assert.containsText('li[name="employee1"]', 'Chelsea Hannan')
    },

    'Cancel_Edit': browser => {
        browser
            .click('li[name="employee2"]')
            .clearValue('input[name="nameEntry"]')
            .setValue('input[name="nameEntry"]', ["Chelsea Hannan"]) 
        browser
            .click('button[name="cancel"]')
            .pause(5000) 
            // Check if cancel was succesful
            .expect.element('li[name="employee2"]').text.to.equal('Marnie Barnett')
    },

    
}
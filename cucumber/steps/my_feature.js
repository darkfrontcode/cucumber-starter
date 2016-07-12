import pageObjects from '../support/page_objects'

module.exports = function () {

    let actions

    this.Before(function(scenario){
        browser.ignoreSynchronization = true
        let actions = new pageObjects()
    })

    this.Given(/^I am on the Cucumber\.js GitHub repository$/, function () {
        console.log(actions)
        return actions.visit('https://github.com/cucumber/cucumber-js')
    })

    this.When(/^I go to the README file$/, function() {

        browser.stop()
        return this.browser.findElement(by.className('btn site-header-actions-btn mr-2')).click()

        // browser.findElement(by.css('[title=README.md]')).click()
        // README.md
    })

    this.Then(/^I should see "([^"]*)" as the page title$/, function(title, callback) {
        callback(null,'pending')
    })

}

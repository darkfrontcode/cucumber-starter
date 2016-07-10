module.exports = function () {

    this.Before(function(scenario){
        browser.ignoreSynchronization = true;
    })

    this.Given(/^I am on the Cucumber\.js GitHub repository$/, function() {
        return this.visit('https://github.com/cucumber/cucumber-js')
    })

    this.When(/^I go to the README file$/, {timeout: 20 * 1000}, function() {

        return this.browser.findElement(by.className('btn site-header-actions-btn mr-2')).click()

        // browser.findElement(by.css('[title=README.md]')).click()
        // README.md
    })

    this.Then(/^I should see "([^"]*)" as the page title$/, function(title, callback) {
        callback(null,'pending')
    })

}

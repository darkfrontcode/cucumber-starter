module.exports = function () {

    this.Given(/^I am on the Cucumber\.js GitHub repository$/, function() {
        browser.ignoreSynchronization = true;
        return this.visit('https://github.com/cucumber/cucumber-js')
    })

    this.When(/^I go to the README file$/, {timeout: 60 * 1000}, function(callback) {
        let div = browser.findElement(by.css('[title=README.md]')).click()

        // README.md
    })

    this.Then(/^I should see "([^"]*)" as the page title$/, function(title, callback) {

        // browser.wait(EC.presenceOf($('#abc')), 5000);
        // this.getUrl()

        // let pageTitle = this.getTitle();
        // if (title === pageTitle)
        //     callback()
        // else
        //     callback(new Error("Expected title " + title))
    })

}

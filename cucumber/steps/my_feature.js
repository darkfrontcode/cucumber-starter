module.exports = function () {

    this.Given(/^I am on the Cucumber\.js GitHub repository$/, function() {
        return this.visit('https://angularjs.org/')
    })

    this.When(/^I go to the README file$/, function(callback) {
        callback(null, 'pending')
    })

    this.Then(/^I should see "([^"]*)" as the page title$/, function(title, callback) {

        // browser.wait(EC.presenceOf($('#abc')), 5000);
        // this.getUrl()

        let pageTitle = this.getTitle();
        if (title === pageTitle)
            callback()
        else
            callback(new Error("Expected title " + title))
    })

}

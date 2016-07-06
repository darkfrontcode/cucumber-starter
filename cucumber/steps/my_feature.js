module.exports = function () {

    this.Given(/^I am on the Cucumber\.js GitHub repository$/, function() {
        return this.browser.get('https://angularjs.org/');
    });

    this.When(/^I go to the README file$/, function(callback) {
        callback();
    });

    this.Then(/^I should see "([^"]*)" as the page title$/, function(arg1, callback) {
        callback();
    });

}

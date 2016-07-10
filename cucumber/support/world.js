'use strict'

class World {

    constructor() {
        this.browser = browser
    }

    getTitle(){
        return this.browser.getTitle()
    }

    visit(url){
        this.browser.get(url)
    }

    getUrl(){
        return this.browser.getCurrentUrl()
    }

}

module.exports = function() {
    this.World = World
}

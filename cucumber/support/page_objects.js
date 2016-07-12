export default class pageObjects{

    constructor(){
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

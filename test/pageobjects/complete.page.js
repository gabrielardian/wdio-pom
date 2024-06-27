import Page from "./page.js";



class CompletePage extends Page{
    Open(path){
        return super.open("checkout-complete.html")
    }
    get buttonHome(){
        return $("#back-to-products")
    }
    async validateOnPage(){
        expect(this.buttonHome).toBeDisplayed()
        await this.buttonHome.click()
    }

}
export default new CompletePage();
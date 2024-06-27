import Page from "./page.js";



class OverviewPage extends Page{
    open(path){
        return super.open("checkout-step-two.html")
    }
    get buttonFinish(){
        return $("#finish")
    }
    async validateOnPage(){
        expect(this.buttonFinish).toBeDisplayed()
        await this.buttonFinish.click()
    }
}
export default new OverviewPage();
import Page from "./page.js";
import { $ } from "@wdio/globals";


class CheckoutPage extends Page{
    Open(path){
        return super.open("checkout-step-one.html")
    }
    get textFirtsname(){
        return $("#first-name")
    }
    get textLastname(){
        return $("#last-name")
    }
    get textPostalcode(){
        return $("#postal-code")
    }
    get buttonContinue(){
        return $("#continue")
    }
    async checkout (firstname,lastname,postalcode){
        await this.textFirtsname.setValue(firstname);
        await this.textLastname.setValue(lastname);
        await this.textPostalcode.setValue(postalcode);
        await this.buttonContinue.click()
        expect(this.buttonContinue).toBeDisplayed()
    }
}
export default new CheckoutPage();
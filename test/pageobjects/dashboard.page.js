import Page from "./page.js";


class DashboardPage extends Page{
    open(path){
        return super.open("inventory.html")
    }
    get cartIcon(){
        return $("#shopping_cart_container");
    }
    get buttonAdd(){
        return $("#add-to-cart-sauce-labs-backpack")
    }
    get buttonCart(){
        return $("#shopping_cart_container")
    }

    async validateOnPage(){
        expect(this.cartIcon).toBeDisplayed()
        browser.pause(5000)
        await this.buttonAdd.click()
        await this.buttonCart.click()
    }
}

export default new DashboardPage();
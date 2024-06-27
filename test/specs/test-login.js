import CartPage from "../pageobjects/cart.page.js";
import CheckoutPage from "../pageobjects/checkout.page.js";
import CompletePage from "../pageobjects/complete.page.js";
import DashboardPage from "../pageobjects/dashboard.page.js";
import LoginPage from "../pageobjects/login.page.js";
import OverviewPage from "../pageobjects/overview.page.js";



describe('Login test', () => {
    it('Successful Login', async () => {
        //Login Page
        await LoginPage.open()
        await LoginPage.login(process.env.EMAIL, process.env.PASSWORD)
        //Dashboard Page
        await DashboardPage.validateOnPage()
        await CartPage.validateOnPage()     
        await CheckoutPage.checkout(process.env.NAMADEPAN,process.env.NAMABELAKANG,process.env.POSTAL_CODE)      
        await OverviewPage.validateOnPage()
        await CompletePage.validateOnPage()
    });

    // it('Successful Login', async () => {
    //     await LoginPage.open()
    //     await LoginPage.textBoxPassword.setValue("secret_sauce")
    //     await LoginPage.buttonLogin.click()
    //     await LoginPage.login(process.env.USERNAME2,process.env.PASSWORD)
    //     await DashboardPage.validateOnPage()
    // });
});
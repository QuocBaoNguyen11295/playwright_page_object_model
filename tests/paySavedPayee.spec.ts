import test from "@playwright/test";
import { HomePage } from "../page-object/HomePage";
import { LoginPage } from "../page-object/LoginPage";
import { PayBillPage } from "../page-object/PayBill/PayBillPage";
import { PaySavedPayeePage } from "../page-object/PayBill/PaySavedPayee/PaySavedPayeePage";
import { Navbar } from '../page-object/Navbar'
test.describe.parallel('Add new pay saved payee flow',()=>{
    let homePage: HomePage
    let loginPage: LoginPage
    let payBillPage: PayBillPage
    let paySavedPayeePage: PaySavedPayeePage
    let navbar: Navbar
    test.beforeEach(async({page})=>{
        homePage = new HomePage(page)
        loginPage = new LoginPage(page)
        payBillPage = new PayBillPage(page)
        navbar = new Navbar(page)
        paySavedPayeePage = new PaySavedPayeePage(page)
        await homePage.visitHomePage()
        await homePage.clickSiginButton()
        await loginPage.login('username','password')
        await loginPage.assertNoErrorMessage(page)
    })

    test('Add Pay Saved Payee',async ({page})=>{
        await homePage.openCheckAccountActivity()
        await navbar.clickOnPayBillTab()
        await payBillPage.clickOnPaySavedPayeeTab()
        await paySavedPayeePage.fillOutInformation('apple','2','1500','2021-10-20','text')
        await paySavedPayeePage.clickOnPayButton()
        await paySavedPayeePage.messageDisplayed()
    })

    test.afterEach(async ({page})=>{
        await page.close()
    })
})
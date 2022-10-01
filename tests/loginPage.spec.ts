import {test} from '@playwright/test'
import {LoginPage} from '../page-object/LoginPage'
import {HomePage} from '../page-object/HomePage'
test.describe.parallel('Login Page Successfully or Not',()=>{
    let loginPage: LoginPage
    let homePage: HomePage
    test.beforeEach(async ({page})=>{
        loginPage = new LoginPage(page)
        homePage = new HomePage(page)
        await homePage.visitHomePage()
        await homePage.clickSiginButton()
    })

    test('should login unsuccessfully',async()=>{
        await loginPage.login('username1','password1')
        await loginPage.assertErrorMessage()
    })

    test('should login successfully',async({page})=>{
        await loginPage.login('username','password')
        await loginPage.assertNoErrorMessage(page)
    })

    test.afterEach(async ({page})=>{
        await page.close()
    })
})
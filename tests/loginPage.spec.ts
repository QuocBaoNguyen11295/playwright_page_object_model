import {test,expect} from '@playwright/test'
import {LoginPage} from '../page-object/LoginPage'
test.describe.parallel('Login Page Successfully or Not',()=>{
    let loginPage: LoginPage
    test.beforeEach(async ({page})=>{
        loginPage = new LoginPage(page)
        await loginPage.visit()
    })

    test('should login unsuccessfully',async()=>{
        await loginPage.login('username1','password1')
        await loginPage.assertErrorMessage()
    })

    test('should login successfully',async()=>{
        await loginPage.login('username','password')
        await loginPage.assertNoErrorMessage()
    })

    test.afterEach(async ({page})=>{
        await page.close()
    })
})
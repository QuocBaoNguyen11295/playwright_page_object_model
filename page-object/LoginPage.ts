import {expect,Locator,Page} from '@playwright/test'

export class LoginPage{
    readonly page: Page
    readonly usernameInput: Locator
    readonly passwordInput: Locator
    readonly submitButton: Locator
    readonly errorMessage: Locator
    readonly signinButton: Locator
    constructor(page: Page){
        this.page = page
        this.usernameInput = page.locator('#user_login')
        this.passwordInput = page.locator('#user_password')
        this.submitButton = page.locator('input[name="submit"]')
        this.errorMessage = page.locator('.alert-error')
        this.signinButton = page.locator('#signin_button')
    }

    async login(username: string,password: string){
        await this.usernameInput.type(username.trim())
        await this.passwordInput.type(password.trim())
        await this.submitButton.click()
    }
    
    async assertErrorMessage(){
        await expect(this.errorMessage).toBeVisible()
        await expect(this.errorMessage).toContainText('Login and/or password are wrong.')
    }

    async assertNoErrorMessage(){
        await expect(this.errorMessage).not.toBeVisible()
    }
}
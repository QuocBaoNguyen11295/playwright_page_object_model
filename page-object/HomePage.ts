import {expect,Locator,Page} from '@playwright/test'

export class HomePage{
    readonly page:Page
    readonly signinButton: Locator
    constructor(page:Page){
        this.page = page
        this.signinButton = page.locator('#signin_button')
    }

    async visitHomePage(){
        await this.page.goto('http://zero.webappsecurity.com/index.html')
    }

    async clickSiginButton(){
        await this.signinButton.click()
    }



    
}
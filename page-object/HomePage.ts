import {expect,Locator,Page} from '@playwright/test'

export class HomePage{
    readonly page:Page
    readonly signinButton: Locator
    readonly searchText: Locator
    constructor(page:Page){
        this.page = page
        this.signinButton = page.locator('#signin_button')
        this.searchText = page.locator('#searchTerm')
    }

    async visitHomePage(){
        await this.page.goto('http://zero.webappsecurity.com/index.html')
    }

    async clickSiginButton(){
        await this.signinButton.click()
    }

    async typeKeywordToSearchBox(keyword: string){
        await this.searchText.type(keyword.trim())
        await this.page.keyboard.press('Enter')
    }

}
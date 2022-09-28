import {expect,Page,Locator} from '@playwright/test'

export class SearchPage{
    readonly page: Page
    readonly searchResult: Locator
    constructor(page: Page){
        this.page = page
        this.searchResult = page.locator('.top_offset > ul')
    }

    async searchResultNotExisted(){
        await expect(this.searchResult).not.toBeVisible()
    }

    async searchResultExisted(){
        await expect(this.searchResult).toBeVisible()
    }
}
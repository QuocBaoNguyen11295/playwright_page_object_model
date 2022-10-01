import {expect,Page,Locator} from '@playwright/test'
import { BasePage } from './BasePage'

export class SearchPage extends BasePage{
    readonly page: Page
    readonly searchResult: Locator
    constructor(page: Page){
        super(page)
        this.searchResult = page.locator('.top_offset > ul')
    }

    async searchResultNotExisted(){
        await expect(this.searchResult).not.toBeVisible()
    }

    async searchResultExisted(){
        await expect(this.searchResult).toBeVisible()
    }
}
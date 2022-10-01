import { Locator,Page,expect } from "@playwright/test";
import { BasePage } from "../BasePage";

export class PayBillPage extends BasePage{
    readonly page: Page;
    readonly paySavedPayee: Locator
    readonly addNewPayee: Locator
    readonly purchaseForeignCurrency: Locator
    constructor(page:Page){
        super(page)
        this.paySavedPayee = page.locator('#tabs > ul > li:nth-child(1)')
        this.addNewPayee = page.locator('#tabs > ul > li:nth-child(2)')
        this.purchaseForeignCurrency = page.locator('#tabs > ul > li:nth-child(3)')
    }

    async clickOnPaySavedPayeeTab(){
        this.paySavedPayee.click()
    }

    async clickOnAddNewPayeeTab(){
        this.addNewPayee.click()
    }

    async clickOnPurchaseForeignCurrency(){
        this.purchaseForeignCurrency.click()
    }
}
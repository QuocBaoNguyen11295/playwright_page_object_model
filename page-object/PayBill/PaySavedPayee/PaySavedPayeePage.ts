import { expect,Locator,Page } from "@playwright/test";
import { BasePage } from "../../BasePage";

export class PaySavedPayeePage extends BasePage{
    readonly page: Page
    readonly payee: Locator
    readonly account: Locator
    readonly amount: Locator
    readonly date: Locator
    readonly description: Locator
    readonly payButton: Locator
    readonly message: Locator
    constructor(page:Page){
        super(page)
        this.payee = page.locator('#sp_payee')
        this.account = page.locator('#sp_account')
        this.amount = page.locator('#sp_amount')
        this.date = page.locator('#sp_date')
        this.description = page.locator('#sp_description')
        this.payButton = page.locator('#pay_saved_payees')
        this.message = page.locator('#alert_content')
    }

    async fillOutInformation(payee:string,account:string,amount:string,date:string,description:string){
        await this.payee.selectOption(payee)
        await this.account.selectOption(account)
        await this.amount.type(amount)
        await this.date.type(date)
        await this.description.type(description)
    }

    async clickOnPayButton(){
        await this.payButton.click()
    }

    async messageDisplayed(){
        await expect(this.message).toBeVisible()
        await expect(this.message).toContainText('The payment was successfully submitted.')
    }
}
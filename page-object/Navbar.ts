import {Page,Locator,expect} from'@playwright/test'
import { BasePage } from './BasePage';

export class Navbar extends BasePage{
    readonly page:Page
    readonly accountSummary: Locator
    readonly accountActivity: Locator
    readonly transferFund: Locator
    readonly payBill: Locator
    readonly moneyMap: Locator
    readonly onlineStatement: Locator
    constructor(page:Page){
        super(page)
        this.accountSummary = page.locator('#account_summary_tab')
        this.accountActivity = page.locator('#account_activity_tab')
        this.transferFund = page.locator('#transfer_funds_tab')
        this.payBill = page.locator('#pay_bills_tab')
        this.moneyMap = page.locator('#money_map_tab')
        this.onlineStatement = page.locator('#online_statements_tab')
    }

    async clickOnAccountSummaryTab(){
        await this.accountSummary.click()
    }

    async clickOnAccountActivityTab(){
        await this.accountActivity.click()
    }

    async clickOnTransferFundTab(){
        await this.transferFund.click()
    }

    async clickOnPayBillTab(){
        await this.payBill.click()
    }

    async clickOnMoneyMap(){
        await this.moneyMap.click()
    }

    async clickOnOnlineStatementTab(){
        await this.onlineStatement.click()
    }
}
import { expect,Locator,Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class FeedbackPage extends BasePage{
    readonly page: Page
    readonly name: Locator
    readonly email: Locator
    readonly subject: Locator
    readonly comment: Locator
    readonly sendMessageButton: Locator
    readonly clearButton: Locator
    constructor(page:Page){
        super(page)
        this.name = page.locator('#name')
        this.email = page.locator('#email')
        this.subject = page.locator('#subject')
        this.comment = page.locator('#comment')
        this.sendMessageButton = page.locator('input[value="Send Message"]')
        this.clearButton = page.locator('input[value="Clear"]')
    }

    async fillOutInformation(name:string,email:string,subject:string,comment:string){
        await this.name.type(name)
        await this.email.type(email)
        await this.subject.type(subject)
        await this.comment.type(comment)
    }

    async clickOnSendMessageButton(){
        await this.sendMessageButton.click()
    }

    async clickOnClearButton(){
        await this.clearButton.click()
    }

    async allTextFieldDeleted(){
        await expect(this.name).toBeEmpty()
        await expect(this.email).toBeEmpty()
        await expect(this.subject).toBeEmpty()
        await expect(this.comment).toBeEmpty()
    }
}
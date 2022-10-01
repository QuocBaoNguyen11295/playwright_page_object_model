import { expect,Locator,Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class SendFeedbackPage extends BasePage{
    readonly page:Page
    readonly header: Locator
    readonly text: Locator
    constructor(page:Page){
        super(page)
        this.header = page.locator('#feedback-title')
        this.text = page.locator('.container > .top_offset > div > div')
    }

    async messageSentSuccessfully(name:string){
        await expect(this.header).toContainText('Feedback')
        await expect(this.text).toContainText('Thank you for your comments, '+name+'. They will be reviewed by our Customer Service staff and given the full attention that they deserve.')
    }
}
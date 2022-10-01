import {test} from '@playwright/test'
import { HomePage } from '../page-object/HomePage'
import { FeedbackPage } from '../page-object/FeedbackPage'
import { SendFeedbackPage } from '../page-object/SendFeedbackPage'

test.describe.parallel('Send feedback flow',()=>{
    let homePage: HomePage
    let feedbackPage: FeedbackPage
    let sendFeedbackPage: SendFeedbackPage
    test.beforeEach(async({page})=>{
        homePage = new HomePage(page)
        feedbackPage = new FeedbackPage(page)
        sendFeedbackPage = new SendFeedbackPage(page)
        await homePage.visitHomePage()
        await homePage.openFeedbackTab()
    })

    test('All field are cleared after clicking on "Clear" button',async()=>{
        await feedbackPage.fillOutInformation('Quoc Bao Nguyen','baonguyen0112@gmail.com','Test 1123','Test Test')
        await feedbackPage.clickOnClearButton()
        await feedbackPage.allTextFieldDeleted()
    })

    test('Comment is sent successfully after clicking on "Send Message" button',async()=>{
        await feedbackPage.fillOutInformation('Quoc Bao Nguyen','baonguyen0112@gmail.com','Test 1123','Test Test')
        await feedbackPage.clickOnSendMessageButton()
        await sendFeedbackPage.messageSentSuccessfully('Quoc Bao Nguyen')
    })

    test.afterEach(async({page})=>{
        page.close()
    })
})
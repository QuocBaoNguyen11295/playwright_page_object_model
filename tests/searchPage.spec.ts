import {test} from '@playwright/test'
import { LoginPage } from '../page-object/LoginPage'
import { HomePage } from '../page-object/HomePage'
import { SearchPage } from '../page-object/SearchPage'

test.describe.parallel('Search keyword',()=>{
    let loginPage: LoginPage
    let homePage: HomePage
    let searchPage: SearchPage
    test.beforeEach(async({page})=>{
        loginPage = new LoginPage(page)
        homePage = new HomePage(page)
        searchPage = new SearchPage(page)
        await homePage.visitHomePage()
    })

    test('No search result with "anything" keyword',async()=>{
        await homePage.typeKeywordToSearchBox('anything')
        await searchPage.searchResultNotExisted()
    })

    test('Search result will be existed with "Zero" keyword',async()=>{
        await homePage.typeKeywordToSearchBox('Zero')
        await searchPage.searchResultExisted()
    })

    test.afterEach(async({page})=>{
        page.close()
    })
})
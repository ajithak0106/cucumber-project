import { Before,After } from "@cucumber/cucumber";
import { LoginPage } from "../page/LoginPage.js";
import { SearchHotel } from "../page/SearchHotel.js";
Before(async function(){
    await this.openBrowser()
    this.login = new LoginPage(this.page)
    this.SearchHotel = new SearchHotel(this.page)
})

After (async function(){
    await this.closeBrowser()
})

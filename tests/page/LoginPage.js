export class LoginPage{
    constructor(page){
        this.page = page
        this.username = page.locator('//input[@id="username"]')
        this.password = page.locator('//input[@id="password"]')
        this.button = page.locator('//input[@id="login"]')

    }
    async VisitUrl(){
        await this.page.goto('https://adactinhotelapp.com/')
    }
    async EnterUsername(uname){
        await this.username.fill(uname)
    }
    async EnterPassword(upass){
        await this.password.fill(upass)
    }
    async ClickLoginButton(){
        await this.button.click()

    }
}

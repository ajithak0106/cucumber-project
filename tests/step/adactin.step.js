import { Given,When,Then } from "@cucumber/cucumber";
import { LoginPage } from "../page/LoginPage.js";
import { SearchHotel } from "../page/SearchHotel.js";

Given('navigate to adactin page', async function () {
    this.login = new LoginPage(this.page)
    this.searchHotel = new SearchHotel(this.page)
    await this.login.VisitUrl()
    
 
});

When('enter the username in username field', async function () {
    await this.login.EnterUsername('ajithak123')
  
});

When('Enter the password in password field',async function () {
    await this.login.EnterPassword('20KCG9')
  
});


Then('click on the login button navigateto the search hotel page', async function () {
    await this.login.ClickLoginButton()  
}); 

When('select the location', async function () {  
    await this.searchHotel.SelectLocation({value:"Sydney"})
});

When('select the hotel',async function () {
  await this.searchHotel.SelectHotels({value:"Hotel Sunshine"})
});

When('select the Room type',async function () {
  await this.searchHotel.SelectRoomType({value:"Double"})
});

When('select the number of rooms',async function () {
  await this.searchHotel.RoomCount({value:"2"})
});

When('select the adults per rooms',async function () {
  await this.searchHotel.SelectAdultsCount({value:"3"})
});

When('select the childrens per rooms',async function () {
  await this.searchHotel.SelectChildCount({value:"1"})
});

Then('click the search button',async function () {
  await this.searchHotel.ClickSearchButton()
});










// Given('navigate to register page', async function () {
//     this.Register = new RegisterPage(this.page)
//     await this.Register.RegisterUrl()
// });

// When('Enter the username in username field', async function () {
//     await this.Register.RegUsername('vijay@123')
// });

// When('Enter the Regpassword in regpassword field', async function () {
//     await this.Register.RegRePassword('Vijay@123')
    
// });

// When('Enter the confirm password in password field',async function () {
//     await this.Register.RegPassword('Vijay@123')
// });

// When('Enter the full name in the full name field',async function () {
//     await this.Register.RegRePassword('Vijay@123')
// });

// When('Enter the Email in the Email field',async function () {
//     await this.Register.EnterFullName('vijaykuamr')
// });

// When('Click the check box in the terms and condition',async function () {
//     await this.Register.Clickterms()
// });

// Then('click on the register button navigateto the register success page',async function () {
//     await this.Register.ClickRegister()

// });


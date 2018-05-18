
var loginpage = require('../Pages/LoginPage.js');
var KeyAction = require('../Common/KeyActions.js');
describe("Login To APP", function () {
   it("Login with Chutti APP", function () {
    browser.get('https://mail.google.com');
    allure.feature('Login to APP');
    browser.driver.manage().window().maximize();
    browser.sleep(1000).then(function () {
      KeyAction.TypeTextWhenElementVisible(loginpage.EnterMailAddress,'ssathishkumar@gmail.com',' Email ID Entered in Mail ID Field');
      KeyAction.TypeTextWhenElementVisible(loginpage.EnterPassword,'Password@123', 'Password Entered in Password Field');
      KeyAction.clickWhenClickable(loginpage.ClickLogin, 'Login Button Clicked Successfully');
      KeyAction.ExpectedEqualTOActualResult(InputData.ExceptedResultForSuccessfullLogin,KeyAction.getTextValueElementVisible(loginpage.DashboardText),'Successfully Logged to Chutti APP');
      KeyAction.clickWhenClickable(loginpage.Clickperson,'Person Button Clicked Successfully');
      KeyAction.clickWhenClickable(loginpage.ClickLogout,'Logout Button Clicked Successfully');
    })
  })
  


});
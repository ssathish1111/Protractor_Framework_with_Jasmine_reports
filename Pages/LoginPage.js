'use strict';
var LoginPage = function () {
};
LoginPage.prototype = Object.create({}, {
    EnterMailAddress: {
        get: function () {
            return element(by.name(Emailname));
        }
    },
    EnterPassword: {
        get: function () {
            return element(by.name(passwordname));
        }
    },
    ClickLogin: { 
        get: function (){ 
          
            return element(by.xpath(LoginBtnxpath));
        } 
    },
    DashboardText: { 
        get: function (){ 
           return element(by.linkText(Dashboard_linkText));
        } 
    },
    
  
    ClickLogout: { 
        get: function () {
             return element(by.xpath(logout_xpath));
         } 
        }
});
module.exports = new LoginPage();

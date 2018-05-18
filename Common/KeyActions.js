const EC = protractor.ExpectedConditions;
const TIMEOUT_MS = 20000;

const clickWhenClickable = function (pageelement,ActionInfo) {
    
    browser.wait(EC.elementToBeClickable(pageelement),TIMEOUT_MS);
    pageelement.click();
    allure.story(ActionInfo);
}
const TypeTextWhenElementVisible = function (pageelement, textToEnter,ActionInfo) {
    browser.wait(EC.visibilityOf(pageelement),TIMEOUT_MS);
    pageelement.sendKeys(textToEnter);
    allure.story(textToEnter+' '+ActionInfo);

}
const getTextValueElementVisible = function (pageelement,ActionInfo) {
    browser.wait(EC.visibilityOf(pageelement),TIMEOUT_MS);
    return pageelement.getText();
     allure.story(ActionInfo);

}
const ExpectedEqualTOActualResult = function (Expected,Actual,ActionInfo) {
    expect(Expected).toEqual(Actual);
    allure.story(ActionInfo);
   
}

module.exports = { clickWhenClickable, TypeTextWhenElementVisible, getTextValueElementVisible,ExpectedEqualTOActualResult };

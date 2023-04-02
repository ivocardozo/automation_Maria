import { Given, setDefaultTimeout, Then, When,  } from "@cucumber/cucumber";
import { expect } from "chai";
import { TESTDATA } from "../../config.app";
import { driverInstance } from "../../src/core/driver";
import { headerPage } from "../../src/pages/components/header.page";
import { loginPage } from "../../src/pages/login.page";

setDefaultTimeout(60 * 1000);

Given('the user logged into Todoist', async function () {
    await loginPage.setEmail(TESTDATA.email);
    await loginPage.setPassword(TESTDATA.password);
    await loginPage.clickLogin();
    const isVisible = await headerPage.isHomeIconVisible();
    expect(isVisible).true;
});

Given('the user sets the email', async function () {
    const email = TESTDATA.email == '' ? process.env.EMAIL as string : TESTDATA.email;
    await loginPage.setEmail(email);
});

Given('the user sets the password', async function () {
    const password = TESTDATA.password == '' ? process.env.PASSWORD as string : TESTDATA.password;
    await loginPage.setPassword(password);
});

When('the user clicks the Login button', async function () {
    await loginPage.clickLogin();
});

Then('the user should see {string} text on the URL', async function (url) {
    const isVisible = await headerPage.isHomeIconVisible();
    expect(isVisible).true;
    const pageUrl = await driverInstance.getPageUrl();    
    expect(pageUrl).includes(url);
});

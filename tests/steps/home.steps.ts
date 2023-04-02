import { Given, setDefaultTimeout, Then, When,  } from "@cucumber/cucumber";
import { expect } from "chai";
import { TESTDATA } from "../../config.app";
import { homePage } from "../../src/pages/home.page"

setDefaultTimeout(60 * 1000);

Given('the user selects the Elements option', async function () {
    console.log("<<<<<<<<<< Element option >>>>>>>")    
    await homePage.clickElements();
});

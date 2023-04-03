import { Given, setDefaultTimeout, Then, When,  } from "@cucumber/cucumber";
import { expect } from "chai";
import { TESTDATA } from "../../config.app";
import { homePage } from "../../src/pages/home.page"
import { textBox } from "../../src/pages/components/textBox.page"

setDefaultTimeout(60 * 1000);

// Given('the user selects the Elements option', async function () {
//     await homePage.clickElements();
// });

Given('the user clicks the text box button', async function () {
    console.log()
        await textBox.clickTextBoxButton();
});

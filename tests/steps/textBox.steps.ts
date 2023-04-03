import { Given, setDefaultTimeout, Then, When,  } from "@cucumber/cucumber";
import { expect } from "chai";
import { TESTDATA } from "../../config.app";
import { homePage } from "../../src/pages/home.page"
import { textBox } from "../../src/pages/components/textBox.page"

setDefaultTimeout(60 * 1000);

// Given('the user selects the Elements option', async function () {
//     await homePage.clickElements();
// });
const sleep = (ms: number) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

Given('the user clicks the text box button', async function () {
        await textBox.clickTextBoxButton();
});

Given('the user sets {string} as Full Name', async function (inputname) {
        await textBox.setNameTextField(inputname);
        await sleep(1500);
});

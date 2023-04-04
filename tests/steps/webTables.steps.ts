import { Given, setDefaultTimeout, Then, When,  } from "@cucumber/cucumber";
import { expect } from "chai";
import { TESTDATA } from "../../config.app";
import { homePage } from "../../src/pages/home.page"
import { webTables } from "../../src/pages/components/webTables.page"

setDefaultTimeout(60 * 1000);

// Given('the user selects the Elements option', async function () {
//     await homePage.clickElements();
// });
const sleep = (ms: number) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

Given('the user clicks the add button', async function () {
        await webTables.clickaddButton();
});

Given('the user sets {string} as First Name', async function (inputfirstname) {
        await webTables.setfirstName(inputfirstname);
        await sleep(1500);
});

Given('the user sets {string} as Last Name', async function (inputlastName) {
    await webTables.setlastName(inputlastName);
    await sleep(1500);
});

Given('the user sets {string} as email', async function (inputEmail) {
    await webTables.setemail(inputEmail);
    await sleep(1500);
});

Given('the user sets {string} age', async function (inputAge) {
    await webTables.setage(inputAge);
    await sleep(1500);
});

Given('the user sets {string} as salary', async function (inputSalary) {
    await webTables.setsalary(inputSalary);
    await sleep(1500);
});

Given('the user sets {string} as departament', async function (inputdeepartament) {
    await webTables.setdepartament(inputdeepartament);
    await sleep(1500);
});

Given('the user clicks as Submit button', async function () {
    await webTables.clickSubmit();
    await sleep(1800);
});

// Given('the user clicks as Edit file button', async function () {
//     await webTables.clickEdit();
//     await sleep(1500);
// });


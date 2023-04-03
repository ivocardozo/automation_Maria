import { ElementActions } from "../../core/element-actions";
import { BasePage } from "../base.page";

const sleep = (ms: number) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };
const tie=500;

class TextBox extends BasePage {
    // private textBoxButton: string = '/html/body/div[2]/div/div/div[2]/div[1]/div/div/div[1]/div/ul/li[1]'
    private textBoxButton: string = '//li[@class="btn btn-light active"]'
    
    private nameTextField: string = '//input[@id="userName"]';
    private emailTextField: string = '//*[@id="userEmail"]';
    private currentAddressTextField: string = '//*[@id="currentAddress"]';
    private permanentAddressTextField: string = '//*[@id="permanentAddress"]';
    private submitButton: string = '//*[@id="submit"]';
    
    constructor(){
        super();
    }
    
    async clickTextBoxButton() {
        // await sleep(1500);
        await ElementActions.click(this.textBoxButton);
        // await sleep(1500);
    }
    async setNameTextField(textFieldName: string) {
        await ElementActions.setText(this.nameTextField, textFieldName);
    }
    async setemailTextField(emailText: string) {
        await ElementActions.setText(this.emailTextField, emailText);
    }
    async setcurrentAddressTextField(currentAddressText: string) {
        await ElementActions.setText(this.currentAddressTextField, currentAddressText);
    }
    async setpermanentAddressTextField(permanentAddressText: string) {
        await ElementActions.setText(this.permanentAddressTextField, permanentAddressText);
    }

    async clickSubmit() {
        await ElementActions.click(this.submitButton);
    }
    
}

export const textBox = new TextBox();
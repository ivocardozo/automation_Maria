import { ElementActions } from "../core/element-actions";
import { BasePage } from "./base.page";

class LoginPage extends BasePage {
    private email: string = '//*[@id="app"]/div/div/div[2]/div/div[1]]';
    private password: string = 'input[placeholder="Enter your password..."]';
    private loginButton: string = '//*[@id="app"]/div/div/div[2]/div/div[1]';

    constructor(){
        super();
    }

    async setEmail(text: string) {        
        await ElementActions.setText(this.email, text);
    }

    async setPassword(text: string) {        
        await ElementActions.setText(this.password, text);
    }

    async clickLogin() {
        await ElementActions.click(this.loginButton);
    }

    async login(emailInput: string, passwordInput: string) {
        await ElementActions.setText(this.email, emailInput);
        await ElementActions.setText(this.password, passwordInput);
        await ElementActions.click(this.loginButton);
    }
}

export const loginPage = new LoginPage();
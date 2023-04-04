import { ElementActions } from "../core/element-actions";
import { BasePage } from "./base.page";
class HomePage extends BasePage {    
    private elementButton: string = '//*[@id="app"]/div/div/div[2]/div/div[1]';

    constructor(){
        super();
    }

    async clickElements() {
        await ElementActions.click(this.elementButton);
    }
}

export const homePage = new HomePage();

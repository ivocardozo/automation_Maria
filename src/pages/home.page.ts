import { ElementActions } from "../core/element-actions";
import { BasePage } from "./base.page";
const sleep = (ms: number) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };
class HomePage extends BasePage {    
    private elementButton: string = '//*[@id="app"]/div/div/div[2]/div/div[1]';

    constructor(){
        super();
    }

    async clickElements() {
        await ElementActions.click(this.elementButton);
        await sleep(1500);
    }
}

export const homePage = new HomePage();

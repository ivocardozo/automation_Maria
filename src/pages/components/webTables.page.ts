import { ElementActions } from "../../core/element-actions";
import { BasePage } from "../base.page";

const sleep = (ms: number) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };
const tie=500;

class WebTables extends BasePage {
    // private textBoxButton: string = '/html/body/div[2]/div/div/div[2]/div[1]/div/div/div[1]/div/ul/li[1]'
    private WebTablesButton: string = '//li[@class="btn btn-light active"]'
    
    private addButton: string = '//*[@id="addNewRecordButton"]';
    private firstName: string = '//*[@id="firstName"]';
    private lastName: string = '//*[@id="lastName"]';
    private email: string = '//*[@id="userEmail"]';
    private age: string = '//*[@id="age"]';
    private salary: string = '//*[@id="salary"]';
    private departament: string = '//*[@id="department"]';
    private submit: string = '//*[@id="submit"]';
    private Eedit: string = '#edit-record-1 > svg';



    constructor(){
        super();
    }
    
    async clickaddButton() {
        await sleep(500);
        await ElementActions.click(this.addButton); 
    }
    
    async setfirstName(textfirstName: string) {
        await ElementActions.setText(this.firstName, textfirstName);
    }
    async setlastName(lastNameText: string) {
        await ElementActions.setText(this.lastName, lastNameText);
    }
    async setemail(emailText: string) {
        await ElementActions.setText(this.email, emailText);
    }
   
    async setage(ageText: string) {
        await ElementActions.setText(this.age, ageText);
    }

    async setsalary(salaryText: string) {
        await ElementActions.setText(this.salary, salaryText);
    }
    
    async setdepartament(departamentText: string) {
        await ElementActions.setText(this.departament, departamentText);
    }

    async clickSubmit() {
        await ElementActions.click(this.submit);
    }
    
    async clickEdit() {
        await ElementActions.click(this.submit);
    }
}

export const webTables = new WebTables();
import LoginLocator from "../locator/LoginLocator";
import { expect } from "@playwright/test";

export default class SwaglabsLogin {
    constructor(page) {
        this.page = page;
        this.LoginLocator = new LoginLocator();
        this.InputUsername = page.locator(this.LoginLocator.inputUsername);
        this.InputPassword = page.locator(this.LoginLocator.inputPassword);
        this.ButtonLogin = page.locator(this.LoginLocator.buttonLogin);
    }

    async goto(){
        await this.page.goto('https://www.saucedemo.com/');
    }

    async LoginValidUser(){
        await this.InputUsername.fill('standard_user');
        await expect(this.InputUsername).toHaveValue('standard_user');
        await this.InputPassword.fill ('secret_sauce');
        await expect(this.InputPassword).toHaveValue('secret_sauce');
        await this.ButtonLogin.click();
    }
}
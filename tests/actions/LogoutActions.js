import LoginLocator from "../locator/LoginLocator";
import LogoutLocator from "../locator/LogoutLocator";
import { expect } from "@playwright/test";

export default class SwaglabsProducts {
    constructor(page) {
        this.page = page;
        this.LoginLocator = new LoginLocator();
        this.LogoutLocator = new LogoutLocator();
        this.InputUsername = page.locator(this.LoginLocator.inputUsername);
        this.InputPassword = page.locator(this.LoginLocator.inputPassword);
        this.ButtonLogin = page.locator(this.LoginLocator.buttonLogin);
        this.ButtonBurger = page.locator(this.LogoutLocator.ButtonBurger);
        this.ButtonLogout = page.locator(this.LogoutLocator.Logout);
    }

    async LoginValidUser(){
        await this.page.goto('https://www.saucedemo.com/');
        await this.InputUsername.fill('standard_user');
        await expect(this.InputUsername).toHaveValue('standard_user');
        await this.InputPassword.fill ('secret_sauce');
        await expect(this.InputPassword).toHaveValue('secret_sauce');
        await this.ButtonLogin.click();
    }

    async Logout(){
        await this.ButtonBurger.click();
        await this.ButtonLogout.click();
    }
}
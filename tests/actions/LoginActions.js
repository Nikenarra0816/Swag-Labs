import LoginLocator from "../locator/LoginLocator";
import { expect } from "@playwright/test";

export default class SwaglabsLogin {
    constructor(page) {
        this.page = page;
        this.LoginLocator = new LoginLocator();
        this.InputUsername = page.locator(this.LoginLocator.inputUsername);
        this.InputPassword = page.locator(this.LoginLocator.inputPassword);
        this.ButtonLogin = page.locator(this.LoginLocator.buttonLogin);
        this.MsgRequired = page.locator(this.LoginLocator.MsgRequired);
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

    async LoginBlankUser(){
        await this.InputUsername.fill('');
        await expect(this.InputUsername).toHaveValue('');
        await this.InputPassword.fill ('');
        await expect(this.InputPassword).toHaveValue('');
        await this.ButtonLogin.click();

        await expect(this.MsgRequired).toBeVisible();
        await expect(this.MsgRequired).toContainText('Epic sadface: Username is required');  
    }

    async LoginBlankUsername(){
        await this.InputUsername.fill('');
        await expect(this.InputUsername).toHaveValue('');
        await this.InputPassword.fill ('secret_sauce');
        await expect(this.InputPassword).toHaveValue('secret_sauce');
        await this.ButtonLogin.click();

        await expect(this.MsgRequired).toBeVisible();
        await expect(this.MsgRequired).toContainText('Epic sadface: Username is required');  
    }

}
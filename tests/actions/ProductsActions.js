import LoginLocator from "../locator/LoginLocator";
import ProductsLocator from "../locator/ProductsLocator";
import { expect } from "@playwright/test";

export default class SwaglabsProducts {
    constructor(page) {
        this.page = page;
        this.LoginLocator = new LoginLocator();
        this.ProductsLocator = new ProductsLocator();
        this.InputUsername = page.locator(this.LoginLocator.inputUsername);
        this.InputPassword = page.locator(this.LoginLocator.inputPassword);
        this.ButtonLogin = page.locator(this.LoginLocator.buttonLogin);
        this.Header = page.locator(this.ProductsLocator.Header);
    }

    async LoginValidUser(){
        await this.page.goto('https://www.saucedemo.com/');
        await this.InputUsername.fill('standard_user');
        await expect(this.InputUsername).toHaveValue('standard_user');
        await this.InputPassword.fill ('secret_sauce');
        await expect(this.InputPassword).toHaveValue('secret_sauce');
        await this.ButtonLogin.click();
    }

    async getHeaderText(){
        const headerText = await this.Header.textContent();
        //console.log('Header Text:', headerText);
        await expect(headerText).toBe('Products');
    }
}
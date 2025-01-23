import LoginLocator from "../locator/LoginLocator";
import FilterLocator from "../locator/FilterLocator";
import { expect } from "@playwright/test";

export default class FiltersActions {
    constructor(page) {
        this.page = page;
        this.LoginLocator = new LoginLocator();
        this.FilterLocator = new FilterLocator();
        this.InputUsername = page.locator(this.LoginLocator.inputUsername);
        this.InputPassword = page.locator(this.LoginLocator.inputPassword);
        this.ButtonLogin = page.locator(this.LoginLocator.buttonLogin);
        this.ButtonKlik = page.locator(this.FilterLocator.ButtonKlik);
        this.sortDropdown = page.locator(this.FilterLocator.sortDropdown);
    }

    async LoginValidUser() {
        await this.page.goto('https://www.saucedemo.com/');
        await this.InputUsername.fill('standard_user');
        await expect(this.InputUsername).toHaveValue('standard_user');
        await this.InputPassword.fill('secret_sauce');
        await expect(this.InputPassword).toHaveValue('secret_sauce');
        await this.ButtonLogin.click();
    }

    async SortProducts() {
        await this.ButtonKlik.click();
        await this.sortDropdown.selectOption('za');
        await this.sortDropdown.selectOption('az');
        await this.sortDropdown.selectOption('lohi');
        await this.sortDropdown.selectOption('hilo');
        await this.sortDropdown.selectOption('lohi');
    }
}

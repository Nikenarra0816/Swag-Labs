import LoginLocator from "../locator/LoginLocator";
import CheckoutLocator from "../locator/CheckoutLocator";
import { expect } from "@playwright/test";

export default class SwaglabsCheckout {
    constructor(page) {
        this.page = page;
        this.LoginLocator = new LoginLocator();
        this.CheckoutLocator = new CheckoutLocator();
        this.InputUsername = page.locator(this.LoginLocator.inputUsername);
        this.InputPassword = page.locator(this.LoginLocator.inputPassword);
        this.ButtonLogin = page.locator(this.LoginLocator.buttonLogin);
        this.ButonAddProductSLB = page.locator(this.CheckoutLocator.ButonAddProductSLB);
        this.ButtonAddProductLBL = page.locator(this.CheckoutLocator.ButtonAddProductLBL);
        this.ButtonAddProductLBS = page.locator(this.CheckoutLocator.ButtonAddProductLBS);
        this.IconShoppingCart = page.locator(this.CheckoutLocator.IconShoppingCart);
    }

    async LoginValidUser(){
        await this.page.goto('https://www.saucedemo.com/');
        await this.InputUsername.fill('standard_user');
        await expect(this.InputUsername).toHaveValue('standard_user');
        await this.InputPassword.fill ('secret_sauce');
        await expect(this.InputPassword).toHaveValue('secret_sauce');
        await this.ButtonLogin.click();
    }

    async CheckoutMultiProduct(){
        await this.ButonAddProductSLB.click();
        await this.ButtonAddProductLBL.click();
        await this.ButtonAddProductLBS.click();
        await this.IconShoppingCart.click();
    }    
}
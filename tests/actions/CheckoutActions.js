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
        this.ButtonCheckout = page.locator(this.CheckoutLocator.ButtonCheckout);
        this.FormFirstName = page.locator(this.CheckoutLocator.FormFirstName);
        this.FormLastName = page.locator(this.CheckoutLocator.FormLastName);
        this.FormZip = page.locator(this.CheckoutLocator.FormZip);
        this.ButtonContinue = page.locator(this.CheckoutLocator.ButtonContinue);
        this.ButtonFinish = page.locator(this.CheckoutLocator.ButtonFinish);
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

    async FormCheckout(){
        await this.ButtonCheckout.click();
        await this.FormFirstName.fill('niken');
        await expect(this.FormFirstName).toHaveValue('niken');
        await this.FormLastName.fill('auliya');
        await expect(this.FormLastName).toHaveValue('auliya');
        await this.FormZip.fill('1212');
        await this.ButtonContinue.click();
    }

    async FinishCheckout(){
        await this.ButtonFinish.click();
    }
}
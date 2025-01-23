// @ts-check
const { test, expect } = require('@playwright/test');
const {default: CheckoutActions} = require('./actions/CheckoutActions');

test('Checkout 3 Product', async ({ page }) => {
  const objActions = new CheckoutActions(page);
  await objActions.LoginValidUser();
  await objActions.CheckoutMultiProduct();
});
test('Fill Form Confirm Checkout', async ({ page }) => {
  const objActions = new CheckoutActions(page);
  await objActions.LoginValidUser();
  await objActions.CheckoutMultiProduct();
  await objActions.FormCheckout();
});

test('Finish Checkout', async ({ page }) => {
  const objActions = new CheckoutActions(page);
  await objActions.LoginValidUser();
  await objActions.CheckoutMultiProduct();
  await objActions.FormCheckout();
  await objActions.FinishCheckout();
});


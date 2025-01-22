// @ts-check
const { test, expect } = require('@playwright/test');
const {default: CheckoutActions} = require('./actions/CheckoutActions');

test('Checkout 3 Product', async ({ page }) => {
  const objActions = new CheckoutActions(page);
  await objActions.LoginValidUser();
  await objActions.CheckoutMultiProduct();
});

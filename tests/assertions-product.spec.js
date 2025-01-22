// @ts-check
const { test, expect } = require('@playwright/test');
const {default: productsActions} = require('./actions/ProductsActions');

test('Directly Page Products', async ({ page }) => {
  const objActions = new productsActions(page);
  await objActions.LoginValidUser();
  await objActions.getHeaderText();
});

test('Detail Products', async ({ page }) => {
    const objActions = new productsActions(page);
    await objActions.LoginValidUser();
    await objActions.getHeaderText();
    await objActions.DetailProduct();
  });

// @ts-check
const { test, expect } = require('@playwright/test');
const {default: loginActions} = require('./actions/LoginActions');

test('Login valid credentials', async ({ page }) => {
  const objActions = new loginActions(page);
  await objActions.goto();
  await objActions.LoginValidUser();
});

test('Login blank credentials', async ({ page }) => {
    const objActions = new loginActions(page);
    await objActions.goto();
    await objActions.LoginBlankUser();
});

test('Login with blank username credentials', async ({ page }) => {
    const objActions = new loginActions(page);
    await objActions.goto();
    await objActions.LoginBlankUsername();
});

test('Login with blank password credentials', async ({ page }) => {
    const objActions = new loginActions(page);
    await objActions.goto();
    await objActions.LoginBlankPassword();
});

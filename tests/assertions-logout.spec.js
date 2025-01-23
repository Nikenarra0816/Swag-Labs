// @ts-check
const { test, expect } = require('@playwright/test');
const {default: LogoutActions} = require('./actions/LogoutActions');

test('Logout', async ({ page }) => {
  const objActions = new LogoutActions(page);
  await objActions.LoginValidUser();
  await objActions.Logout();
});






// @ts-check
const { test, expect } = require('@playwright/test');
const { default: FiltersActions } = require('./actions/FilterActions');

test('Filter Sort Product', async ({ page }) => {
  const objActions = new FiltersActions(page);
  await objActions.LoginValidUser();
  await objActions.SortProducts();
});

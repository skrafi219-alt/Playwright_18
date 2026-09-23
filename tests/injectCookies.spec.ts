import {test,expect} from '@playwright/test';

test.beforeAll( async ({browser})=>{

    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/client");
    await context.storageState({path:'state.json'});
});

test('inject cookies testcases for login', async ({browser})=>{

    const context = await browser.newContext({storageState:'state.json'});
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/client");

    await expect(page).toHaveTitle("Let's Shop");
})
import {test,expect,request} from '@playwright/test';

const loginPayLoad = {userEmail: "rafi.tgcs219@gmail.com", userPassword: "MBxanptFWYri5$k"};
let token:string;

test.beforeAll( async ()=>{

    const apiContext = await request.newContext();
    const apiRes = await apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login",{data:loginPayLoad});
    const apiResJson=await apiRes.json();
    token=await apiResJson.token;
    console.log(token);

});

test('API Login TestCase', async ({page})=>{

    await page.addInitScript(value =>{

        window.localStorage.setItem('token',value)
    },token);

    await page.goto("https://rahulshettyacademy.com/client");
    await expect(page).toHaveTitle("Let's Shop");

});
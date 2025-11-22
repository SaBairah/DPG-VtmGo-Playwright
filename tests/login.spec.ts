import { test, expect } from '@playwright/test';
import { mainPageElements } from '../pages/mainPage';
import { loginPageElements } from '../pages/loginPage';


test('Log in', async ({ page }) => {
    await page.goto('https://www.vtmgo.be/');
    await page.locator(mainPageElements.cookieOk).click();
    //check cookies
    await page.waitForURL('https://www.vtmgo.be/vtmgo');//to avoid the error page???
    //click login
    await page.locator(mainPageElements.loginBtn).click();

    //fill in email
    await page.locator(loginPageElements.email).fill('test.sabinebusschers@gmail.com');

    /*
    Getting error: Status 406 : 0.af01f351.1763825326.1d99669
    and:  Status 406 : 0.c501f351.1763825592.b0966e
    */

    //TODO: fill in password
    //TODO: logout
    //await page.locator(mainPageElements.profileBtn).click();
    //await page.locator(mainPageElements.logoutBtn).click();
});

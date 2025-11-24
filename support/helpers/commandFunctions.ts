import { expect, Page } from "@playwright/test";
import { mainPageElements } from "../pages/mainPage";
import { loginPageElements } from "../pages/loginPage";
import { credentials } from "../credentials";

export async function cookieOk(page: Page) {
    await page.locator(mainPageElements.cookieOkBtn).click();
    await page.waitForURL('https://www.vtmgo.be/vtmgo');//to avoid the error page???
}

export async function login(page: Page) {
    //click login
    await page.locator(mainPageElements.loginBtn).click();

    //fill in email
    await page.locator(loginPageElements.email).fill(credentials.USERNAME);
    await page.locator(loginPageElements.continueBtn).click();
    await page.screenshot({ path: 'test-results/screenshots/screenshot.png' });
    await page.locator(loginPageElements.password).fill(credentials.PASSWORD);
    /*
    Getting error on login: Status 406 : 0.9d01f351.1764008699.a50ac03
    */

    await page.waitForURL('https://www.vtmgo.be/vtmgo');
    await expect(page.locator(mainPageElements.registrationBnnr)).toBeHidden();
}

export async function logout(page: Page) {
    //TODO: logout
    await page.locator(mainPageElements.profileBtn).click();
    await page.locator(mainPageElements.logoutBtn).click();
    await page.locator(mainPageElements.logoutConfirmBtn).click()

    await page.waitForURL('https://www.vtmgo.be/vtmgo');
    await expect(page.locator(mainPageElements.registrationBnnr)).toBeVisible();
}
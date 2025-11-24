import { test } from '@playwright/test';
import { cookieOk, login, logout } from '../support/helpers/commandFunctions';

test('Log in and out', async ({ page }) => {
    await page.goto('https://www.vtmgo.be/');

    await cookieOk(page);
    await login(page);
    await logout(page);
});

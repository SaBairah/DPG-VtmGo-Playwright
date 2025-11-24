import { expect, test } from '@playwright/test';
import { cookieOk, login } from '../support/helpers/commandFunctions';
import { spotlightPageElements } from '../support/pages/spotlightPage';

const linkLinkeroever = "https://www.vtmgo.be/vtmgo/linkeroever~1146b3e3-78dc-4176-b335-ad4659b5346d";
const linkOneshot = "https://www.vtmgo.be/vtmgo/one-shot~7532d76f-d5e2-4a2a-8e6e-ac673a91125d";
const linkLostlands = "https://www.vtmgo.be/vtmgo/in-the-lost-lands~83d4f32e-6a18-4332-9847-6e8ac3e7ada4";

test.beforeEach(async ({ page }) => {
    await page.goto('https://www.vtmgo.be/');
    await cookieOk(page);
    await login(page);
});

test('test the play and trailer buttons for Linkeroever', async ({ page }) => {
    await page.goto(linkLinkeroever);
    await expect(page.getByText(spotlightPageElements.playBtn)).toBeVisible();
    await expect(page.getByText(spotlightPageElements.trailerBtn)).toBeHidden();
});

test('test the play and trailer buttons for One shot', async ({ page }) => {
    await page.goto(linkOneshot);
    await expect(page.getByText(spotlightPageElements.playBtn)).toBeVisible();
    await expect(page.getByText(spotlightPageElements.trailerBtn)).toBeVisible();
});

test('test the play and trailer buttons for in the Lost lands', async ({ page }) => {
    await page.goto(linkLostlands);
    await expect(page.getByText(spotlightPageElements.playBtn)).toBeHidden();
    await expect(page.getByText(spotlightPageElements.trailerBtn)).toBeVisible();
});


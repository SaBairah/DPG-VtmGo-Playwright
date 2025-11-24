import test, { expect } from "@playwright/test";
import { cookieOk } from "../support/helpers/commandFunctions";
import { search } from "../support/helpers/searchFunctions";
import { searchPageElements } from "../support/pages/searchPage";

let searchStr: string;

test.beforeEach(async ({ page }) => {
    await page.goto('https://www.vtmgo.be/');
    await cookieOk(page);
});

test('Search for Familie', async ({ page }) => {
    searchStr = 'Familie';

    await page.goto('https://www.vtmgo.be/');
    await search(page, searchStr);

    await expect(page.locator(searchPageElements.teaserTitle).first()).toHaveText(searchStr);
});

test('Serach for Geen resultaten', async ({ page }) => {
    searchStr = 'Geen resultaten';

    await page.goto('https://www.vtmgo.be/');
    await search(page, searchStr);

    await expect(page.locator(searchPageElements.searchResultsMsg)).toContainText('geen resultaten');
});
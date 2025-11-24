import { Page } from "@playwright/test";
import { searchPageElements } from "../pages/searchPage";
import { mainPageElements } from "../pages/mainPage";

export async function search(page: Page, searchStr: string) {
    await page.getByText(mainPageElements.searchBtnTxt).click();
    await page.locator(searchPageElements.searchBar).fill(searchStr);
    await page.press(searchPageElements.searchBar, 'Enter');
}
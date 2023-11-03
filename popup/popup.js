import { closeBookmarkedTabs } from "/js/closeBookmarkedTabs.js";
import { closeNotBookmarkedTabs } from "/js/closeNotBookmarkedTabs.js";

document.addEventListener("DOMContentLoaded", async function () {
  /* TODO:
    const htmlScanWebsites = document.getElementById("scan-websites");
    const htmlScanDuplicates = document.getElementById("scan-duplicates");
  */
  const htmlCloseBookmarkedTabs = document.getElementById(
    "close-bookmarked-tabs"
  );
  const htmlCloseNotBookmarkedTabs = document.getElementById(
    "close-not-bookmarked-tabs"
  );

  /* TODO:
    htmlScanWebsites.addEventListener("click", async function () {
      await openOrFocusHTMLPage("html/scanWebsites.html");
    });
    htmlScanDuplicates.addEventListener("click", async function () {
      await openOrFocusHTMLPage("html/scanDuplicates.html");
    });
  */
  htmlCloseBookmarkedTabs.addEventListener("click", closeBookmarkedTabs);
  htmlCloseNotBookmarkedTabs.addEventListener("click", closeNotBookmarkedTabs);
});

/**
 * Opens an HTML page in a new tab, if already opened focuses it.
 * @param {string} - The HTML page to open.
 */
async function openOrFocusHTMLPage(html_page) {
  const url = await browser.runtime.getURL(html_page);
  const tabs = await browser.tabs.query({ url });

  if (tabs.length > 0) {
    await browser.tabs.update(tabs[0].id, { active: true });
  } else {
    await browser.tabs.create({ url, active: true });
  }
}

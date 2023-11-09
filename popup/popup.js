import { closeBookmarkedTabs } from "/js/closeBookmarkedTabs.js";
import { closeNotBookmarkedTabs } from "/js/closeNotBookmarkedTabs.js";
//import { openOrFocusHTMLPage } from "/js/openOrFocusHTMLPage.js";

document.addEventListener("DOMContentLoaded", async function () {
  /* TODO:
    const htmlScanWebsites = document.getElementById("scan-websites");
    const htmlScanDuplicates = document.getElementById("scan-duplicates");
  */
  const htmlCloseBookmarkedTabs = document.getElementById("close-bookmarked-tabs");
  const htmlCloseNotBookmarkedTabs = document.getElementById("close-not-bookmarked-tabs");

  /* TODO:
    htmlScanWebsites.addEventListener("click", async function () {
      await openOrFocusHTMLPage("html/scanWebsites.html");
    });
    htmlScanDuplicates.addEventListener("click", async function () {
      await openOrFocusHTMLPage("html/scanDuplicates.html");
    });
  */
  htmlCloseBookmarkedTabs.addEventListener("click", async function () {
    await closeBookmarkedTabs();
  });
  htmlCloseNotBookmarkedTabs.addEventListener("click", async function () {
    await closeNotBookmarkedTabs();
  });
});

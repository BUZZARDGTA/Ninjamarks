export { closeBookmarkedTabs };

/**
 * Close all opened tabs that are bookmarked.
 */
async function closeBookmarkedTabs() {
  const tabIdsToClose = [];

  const tabs = await browser.tabs.query({});
  for (const tab of tabs) {
    const result = await isBookmarkURLBookmarked(tab.url);
    if (result === true) {
      tabIdsToClose.push(tab.id);
    }
  }

  if (tabIdsToClose.length !== 0) {
    await browser.tabs.remove(tabIdsToClose);
  }
}

/**
 * Function that checks whenever a bookmark's URL is bookmarked or not.
 * @param {string} url - the url to check
 * @returns `true` if bookmarked; otherwise `false`. Can also be `undefined` if there was an error while searching for the url.
 */
async function isBookmarkURLBookmarked(url) {
  try {
    const bookmarksSearch = await browser.bookmarks.search({ url });
    if (bookmarksSearch.length !== 0) {
      return true;
    }
  } catch (error) {
    return;
  }
  return false;
}

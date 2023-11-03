export { saveSettings };

/**
 * Function that save setting(s) to local storage.
 * @param {Object} settingsToSave - The settings object to save to local storage.
 * @see {@link https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/storage/StorageArea/set `storage.local.set`} on MDN
 */
async function saveSettings(settingsToSave) {
  return await browser.storage.local.set(settingsToSave);
}

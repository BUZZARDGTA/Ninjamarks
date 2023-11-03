await scanWebsites();


async function scanWebsites() {

  async function startScanningWebsites(urls) {
    // Use the GET method
    // Use 'cors' mode to enable cross-origin requests
    // Don't cache the response
    // Include credentials (cookies) in same-origin requests
    // Automatically follow redirects
    // Don't send a referrer header
    const requestPresets = [
      {
        method: 'HEAD',
        mode: 'no-cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
      },
      {
        method: 'HEAD',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
      },
      {
        method: 'HEAD',
        mode: 'no-cors',
        cache: 'no-cache',
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
      },
      {
        method: 'HEAD',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        redirect: 'follow',
      },
      {
        method: 'HEAD',
        mode: 'no-cors',
        cache: 'no-cache',
        redirect: 'follow',
      },
      {
        method: 'HEAD',
        mode: 'no-cors',
        redirect: 'follow',
      },

      {
        method: 'GET',
        mode: 'no-cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
      },
      {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
      },
      {
        method: 'GET',
        mode: 'no-cors',
        cache: 'no-cache',
        redirect: 'follow',
      },
      {
        method: 'GET',
        mode: 'no-cors',
        redirect: 'follow',
      },
    ];

    const results = [];

    for (const url of urls) {
      let success = false;
      let errors = {};

      for (let presetIndex = 0; presetIndex < requestPresets.length; presetIndex++) {
        const preset = requestPresets[presetIndex];
        try {
          const response = await fetch(url, preset);
          success = true;
          results.push({ url, success, presetIndex, response, ok: response.ok, http_code: response.status });
          break; // Move to the next URL
        } catch (error) {
          errors[presetIndex] = error;
          continue;
          // Handle any errors, but continue trying with other presets
        }
      }

      // If all presets failed for a URL, mark it as unsuccessful
      if (!success) {
        results.push({ url, success, errors });
      }
    }

    return results;
  }

  const websites = await getBookmarkLinks();
  if (websites.length === 0) {
    return;
  }

  const results = await startScanningWebsites(websites)
  console.log('Scanning completed:');
  console.log(results);

}


async function getBookmarkLinks() {
  const bookmarks = await browser.bookmarks.search({});
  const links = bookmarks
    .filter(item => item.type === "bookmark")
    .map(item => item.url);
  return links
}

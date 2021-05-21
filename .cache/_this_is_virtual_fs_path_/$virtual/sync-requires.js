
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/eddy/Documents/profile/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/eddy/Documents/profile/src/pages/404.js")),
  "component---src-pages-cv-js": preferDefault(require("/Users/eddy/Documents/profile/src/pages/cv.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/eddy/Documents/profile/src/pages/index.js"))
}


// prefer default export if available
const preferDefault = m => (m && m.default) || m

exports.components = {
  "component---src-pages-404-js": () => import("./../../../src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-artworks-js": () => import("./../../../src/pages/artworks.js" /* webpackChunkName: "component---src-pages-artworks-js" */),
  "component---src-pages-codearts-js": () => import("./../../../src/pages/codearts.js" /* webpackChunkName: "component---src-pages-codearts-js" */),
  "component---src-pages-cv-js": () => import("./../../../src/pages/cv.js" /* webpackChunkName: "component---src-pages-cv-js" */),
  "component---src-pages-index-js": () => import("./../../../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-performances-js": () => import("./../../../src/pages/performances.js" /* webpackChunkName: "component---src-pages-performances-js" */),
  "component---src-pages-projects-js": () => import("./../../../src/pages/projects.js" /* webpackChunkName: "component---src-pages-projects-js" */),
  "component---src-templates-blog-post-js": () => import("./../../../src/templates/blog-post.js" /* webpackChunkName: "component---src-templates-blog-post-js" */)
}


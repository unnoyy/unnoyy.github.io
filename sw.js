"use strict";var workboxVersion="5.1.4";importScripts("https://storage.googleapis.com/workbox-cdn/releases/".concat(workboxVersion,"/workbox-sw.js")),workbox.core.setCacheNameDetails({prefix:"unnoyy"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"73f6800b907b593fc6edd4c37f903b1b",url:"./about/index.html"},{revision:"ad38a949c3889cdf35e8177af8de63d4",url:"./archives/2020/01/index.html"},{revision:"f2d09ff087e5f4a1934856d3bde93517",url:"./archives/2020/09/index.html"},{revision:"988dfa683dfbf57b2766da03e152c2ad",url:"./archives/2020/index.html"},{revision:"6e5b5d1f4b33bbe1ee97ae788f0bd7b8",url:"./archives/index.html"},{revision:"cf4661260e1393c5ef23a4a07fa15601",url:"./calendar.json"},{revision:"1df4f21317444505f9ad08186be79fdf",url:"./categories/dataset/index.html"},{revision:"8fd54dad8518a9c960c6659a43752258",url:"./categories/hexo/index.html"},{revision:"bb2df26329758a20b05a4c7936b55f24",url:"./categories/index.html"},{revision:"3909b882b45f04b7c3241ac00203f0d2",url:"./categories/paper/index.html"},{revision:"5788f47759a4a35a7d295e030b639877",url:"./css/background.css"},{revision:"bdaf8522d9ca8e1cc400daa9ed676646",url:"./css/index.css"},{revision:"d41d8cd98f00b204e9800998ecf8427e",url:"./css/var.css"},{revision:"95e2083215728a981dbd79c1124b70db",url:"./history/index.html"},{revision:"9ec312077362470e05a47afbb0bb3812",url:"./index.html"},{revision:"d1b128eba3c1cb31c5f23bbf90e96513",url:"./js/Beautify.js"},{revision:"dbdeb740998d5e109022c03631c0f4bc",url:"./js/beautify2.js"},{revision:"3cd7f0ff2b60a78f0670497caa3fab63",url:"./js/calendar.js"},{revision:"f1a1da957faf1f98b8956de3abb8bd51",url:"./js/fish.js"},{revision:"e9d0df266411e5cc5f71025d1b53937f",url:"./js/fishes.js"},{revision:"09753f588fdaae0985d91e181f3a940b",url:"./js/languages.js"},{revision:"4898030387012f8af71563ef8353433a",url:"./js/main.js"},{revision:"c9af02da2fc1f7d634843f61536369d1",url:"./js/search/algolia.js"},{revision:"c33665b06edc70004a016ba9db4205b4",url:"./js/search/local-search.js"},{revision:"e8455f75769585811cd6b3220787d08e",url:"./js/third-party/activate-power-mode.js"},{revision:"6bebed368a1bbcb630dd146cefb103b7",url:"./js/third-party/canvas-nest.js"},{revision:"4ca518354a167db9fe0869c0982ff215",url:"./js/third-party/canvas-ribbon.js"},{revision:"c2420dfec66aa5bad663e6c365a129c8",url:"./js/third-party/click_heart.js"},{revision:"22f4c82da4faed04c79e61fcbbdf675c",url:"./js/third-party/ClickShowText.js"},{revision:"64d1e1837ad1a585888f5d1e16c71f77",url:"./js/third-party/fireworks.js"},{revision:"5c8c9ff4bb9bed49e333387a54eae9be",url:"./js/third-party/piao.js"},{revision:"bd869d5fd54e2fe1f1eeee7c46fa46bc",url:"./js/tw_cn.js"},{revision:"f91ea1a86a5c45e344a24fb437642f36",url:"./js/utils.js"},{revision:"26ab5f7c6d8ea3c42199ac830ae21310",url:"./pic/pwa/manifest.json"},{revision:"26566a4849740fcb4f19b427426ec197",url:"./posts/60504/index.html"},{revision:"b1f564c381e74d27bbe5ea4fc77fb08b",url:"./posts/hexo-hello-World/index.html"},{revision:"18ae85b7a34d0d03f887364d6de35701",url:"./posts/论文调研/index.html"},{revision:"2719e196c659db2e7dafd993fad887ca",url:"./tagcloud/index.html"},{revision:"9962519b1e51212760d77bce1d15818a",url:"./tags/dataset/index.html"},{revision:"6740eec0f26b54f854631fe8ce153a80",url:"./tags/driving-behavior-proﬁling/index.html"},{revision:"3856c0f28e3f4466f65f23cbb75c3a87",url:"./tags/hexo/index.html"},{revision:"d136004be03424bba87981abfad00c04",url:"./tags/index.html"},{revision:"26eed702e0ec27b038f4eccb8821d4cd",url:"./tags/paper/index.html"},{revision:"ce976311fd79efdcde167007f0be08a0",url:"./tags/test/index.html"}],{directoryIndex:null}),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new workbox.strategies.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets"})),workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.com/,new workbox.strategies.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdn\.jsdelivr\.net/,new workbox.strategies.CacheFirst({cacheName:"static-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();
"use strict";var workboxVersion="5.1.4";importScripts("https://storage.googleapis.com/workbox-cdn/releases/".concat(workboxVersion,"/workbox-sw.js")),workbox.core.setCacheNameDetails({prefix:"unnoyy"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"f7ada0fc595e28b883c68cb2fdc1d885",url:"./404.html"},{revision:"cf723751f2eb133180cffb1f7b02bccb",url:"./about/index.html"},{revision:"c5bdcbda228c2d31b0c403a053437105",url:"./archives/2020/01/index.html"},{revision:"27db50302ae4f664e1360fb4889ad18d",url:"./archives/2020/07/index.html"},{revision:"ebee7d30803ba0e4e252ccbad1319b5f",url:"./archives/2020/08/index.html"},{revision:"dde85db6308f333363b4f8b80ff7d91e",url:"./archives/2020/09/index.html"},{revision:"3ed71014c4aa844b2b87093c18e02793",url:"./archives/2020/10/index.html"},{revision:"bd3bddb107cb21a5fab057fc90ab3bf0",url:"./archives/2020/11/index.html"},{revision:"254b89476fe891805628dc889bb3d01c",url:"./archives/2020/12/index.html"},{revision:"a61f44d4d46887c611d9d426fc0e9bb7",url:"./archives/2020/index.html"},{revision:"d8ab05b07fc81ee6904b8c51ce19d9fd",url:"./archives/2021/03/index.html"},{revision:"7609a61258522d19dba599532399cb7a",url:"./archives/2021/04/index.html"},{revision:"39f93ca1bad8e0e1d3509b8e7e337e51",url:"./archives/2021/index.html"},{revision:"4395a60744726fba91f42a7393cecbbe",url:"./archives/index.html"},{revision:"f3a8be4217691dfd171c365566086253",url:"./calendar.json"},{revision:"e1a6186cd5d87586503f7ec9d89ed6df",url:"./categories/dataset/index.html"},{revision:"319ab2cba95a93ab2788dc45c3c531d0",url:"./categories/hexo/index.html"},{revision:"2282ce417a47b3a22ee9ac774ec92f55",url:"./categories/index.html"},{revision:"8064da004e1316abfcea694adbb4c794",url:"./categories/paper/index.html"},{revision:"16b82587c9ba7a3893898d72dfd5abd6",url:"./categories/paper/page/2/index.html"},{revision:"fe58aa8102a14653c4a5a2215f75958e",url:"./categories/summary/index.html"},{revision:"4fbafdc052dab1f47e3e225b3263be00",url:"./categories/summary/page/2/index.html"},{revision:"405f4bb8e6a5e814e605f0c01da1b753",url:"./categories/交通领域/index.html"},{revision:"2c165eca3df589198f7c54980b6a38e1",url:"./css/background.css"},{revision:"e341aed916571d1bbca3d49d8dfe354c",url:"./css/index.css"},{revision:"d41d8cd98f00b204e9800998ecf8427e",url:"./css/var.css"},{revision:"623b31bbb1337a62941244e4d7106abf",url:"./history/index.html"},{revision:"abc8616f30b1ff7c7f23f3bdbe078ad3",url:"./index.html"},{revision:"d1b128eba3c1cb31c5f23bbf90e96513",url:"./js/Beautify.js"},{revision:"dbdeb740998d5e109022c03631c0f4bc",url:"./js/beautify2.js"},{revision:"3cd7f0ff2b60a78f0670497caa3fab63",url:"./js/calendar.js"},{revision:"f1a1da957faf1f98b8956de3abb8bd51",url:"./js/fish.js"},{revision:"e9d0df266411e5cc5f71025d1b53937f",url:"./js/fishes.js"},{revision:"09753f588fdaae0985d91e181f3a940b",url:"./js/languages.js"},{revision:"4898030387012f8af71563ef8353433a",url:"./js/main.js"},{revision:"c9af02da2fc1f7d634843f61536369d1",url:"./js/search/algolia.js"},{revision:"c33665b06edc70004a016ba9db4205b4",url:"./js/search/local-search.js"},{revision:"e8455f75769585811cd6b3220787d08e",url:"./js/third-party/activate-power-mode.js"},{revision:"6bebed368a1bbcb630dd146cefb103b7",url:"./js/third-party/canvas-nest.js"},{revision:"4ca518354a167db9fe0869c0982ff215",url:"./js/third-party/canvas-ribbon.js"},{revision:"c2420dfec66aa5bad663e6c365a129c8",url:"./js/third-party/click_heart.js"},{revision:"22f4c82da4faed04c79e61fcbbdf675c",url:"./js/third-party/ClickShowText.js"},{revision:"64d1e1837ad1a585888f5d1e16c71f77",url:"./js/third-party/fireworks.js"},{revision:"5c8c9ff4bb9bed49e333387a54eae9be",url:"./js/third-party/piao.js"},{revision:"bd869d5fd54e2fe1f1eeee7c46fa46bc",url:"./js/tw_cn.js"},{revision:"f91ea1a86a5c45e344a24fb437642f36",url:"./js/utils.js"},{revision:"e89ce87ff785187ea926e0348c6f9755",url:"./page/2/index.html"},{revision:"19f80045af59aa737203011c5650e518",url:"./page/3/index.html"},{revision:"d7b531ac8f67ed946ef549ee2f141aa1",url:"./page/4/index.html"},{revision:"8ad37353022bd99eaf8e9f22f47a41f3",url:"./page/5/index.html"},{revision:"26ab5f7c6d8ea3c42199ac830ae21310",url:"./pic/pwa/manifest.json"},{revision:"fc53bdced381da066d9f76730f647744",url:"./posts/100001/index.html"},{revision:"e2a5c3130dacc05b249d5e5bfcc547f7",url:"./posts/14702/index.html"},{revision:"4ff8b582dccc602f04f1dffdee2d3a3a",url:"./posts/18430/index.html"},{revision:"cee1235f22b5fbb14d7a4d37f8ae4666",url:"./posts/18527/index.html"},{revision:"bae33950a9db45e1d92bb41bfac862fd",url:"./posts/25088/index.html"},{revision:"1b76e438d23e862cb1f96904646af368",url:"./posts/25131/index.html"},{revision:"0869eddc4614711ab796d8387f6a4537",url:"./posts/29557/index.html"},{revision:"756204b094c4043b9cc57ea3dab82c99",url:"./posts/35331/index.html"},{revision:"ec5ba12c863ff7630024ed04ffe5fe98",url:"./posts/36232/index.html"},{revision:"1b1ba73889687da15d913068e9fcab13",url:"./posts/36523/index.html"},{revision:"e1ab7212a89242b4960bf2615ccd314b",url:"./posts/38577/index.html"},{revision:"bdd6e0cd4caaed461522ee14f6bf3144",url:"./posts/43102/index.html"},{revision:"8a35c2ca021ab6e8bb288ab9c4126a16",url:"./posts/44404/index.html"},{revision:"5d39905d721a8099321b3f8f6cac7a8f",url:"./posts/45610/index.html"},{revision:"ffa65f59c7b4e94dba3ef279eba64465",url:"./posts/51874/index.html"},{revision:"d95d47ee3e1558716da23152c40d6c5d",url:"./posts/56295/index.html"},{revision:"481443ce85952ce68c37a6b419489362",url:"./posts/57948/index.html"},{revision:"4e76f265327d120cf8ca86be06a85dca",url:"./posts/600000/index.html"},{revision:"d5418a04e515978494908b52351c9128",url:"./posts/600001/index.html"},{revision:"0109f9698719626064bce10cf849613b",url:"./posts/600002/index.html"},{revision:"c606071db0d241391ce26ad77d5d7567",url:"./posts/600403/index.html"},{revision:"e0a0391a970bc6db6bb25d7da025c9a6",url:"./posts/60400/index.html"},{revision:"dd5e93b190350de456657d66fdc8f814",url:"./posts/60455/index.html"},{revision:"2d721d294265c24e11143d007ab0289c",url:"./posts/60504/index.html"},{revision:"9b3dd2302253009fc832fc888b826c96",url:"./posts/63541/index.html"},{revision:"87f283e00ba356cc9d4f422eda6cc84c",url:"./posts/8726/index.html"},{revision:"686243997c780424b097f498ec48f88b",url:"./posts/9621/index.html"},{revision:"8f4bfbe81bb7933a0d479c2bb009458f",url:"./posts/hexo-hello-World/index.html"},{revision:"e1231172d53c76a710668c47a86acd03",url:"./posts/k0000/index.html"},{revision:"50d80c695056b2d28abe7d7b5c287313",url:"./posts/k0001/index.html"},{revision:"6c7e3c50660dfcf34642e743e14e6776",url:"./posts/k0004/index.html"},{revision:"4488565e54169ee65217393da8e07299",url:"./posts/k1000/index.html"},{revision:"1b4f87eb459551d12985265acd352bc0",url:"./posts/t0001/index.html"},{revision:"92d7aa27438cf1b25738fa7b4085a96a",url:"./posts/t0002/index.html"},{revision:"3e694739a25c86f1d556965f3b943ff7",url:"./posts/t0003/index.html"},{revision:"8778419724c148936dc3c00b425112bd",url:"./posts/t0004/index.html"},{revision:"7fcb5019d8809a4823b73800cc448480",url:"./posts/t0005/index.html"},{revision:"3cc87a69be8cf2b87dd3c71d379e2c41",url:"./posts/t0006/index.html"},{revision:"f07d48da32392b18b70ed21cde63f72b",url:"./posts/t0007/index.html"},{revision:"051655555a32fde9ccb2d0c0468b42ee",url:"./posts/论文笔记/index.html"},{revision:"79e0f46875a35ffa3e296fbb5b25984d",url:"./posts/论文调研/index.html"},{revision:"1d27e74c7d9eb3570cefb9c4587edc19",url:"./tagcloud/index.html"},{revision:"894df941066c19c6a00fe7160a34eb5f",url:"./tags/algorithm/index.html"},{revision:"fa059e21cf2cbf34d27942d6efd36237",url:"./tags/dataset/index.html"},{revision:"03db4a04f70c8f15ab8918c14a7172a7",url:"./tags/driving-behavior-proﬁling/index.html"},{revision:"4976fb66e0e7f19bb1b555c8c6b2b33d",url:"./tags/driving-event/index.html"},{revision:"3a38fd7de864f6e80420727b2ea97824",url:"./tags/hexo/index.html"},{revision:"ffd5647ea9e71d5bdd1c00a440da380b",url:"./tags/index.html"},{revision:"f1d9fe6c277e81780f5a52781247d361",url:"./tags/leetcode/index.html"},{revision:"f579ad18a1aefbd835a72a58ad356ee0",url:"./tags/machine-learning/index.html"},{revision:"bb0c59b5d573afe44995a898f781b9ab",url:"./tags/paper/index.html"},{revision:"3a95865dc6491a0806b0b845879ca9b8",url:"./tags/paper/page/2/index.html"},{revision:"b8e91b5630b161105ae2bcfe5e9db089",url:"./tags/summary/index.html"},{revision:"73c27946b713c5eb6cda4a1b40d20c4c",url:"./tags/summary/page/2/index.html"},{revision:"c9697e267756e248b8373bb1fc00218e",url:"./tags/summary/page/3/index.html"},{revision:"2c2f2b8eda7244b1fcdeaa4038f546da",url:"./tags/taxi-demand/index.html"},{revision:"f52d53e2432800e8f9f979efd9357bf0",url:"./tags/taxi-demand/page/2/index.html"},{revision:"259a1709c6efe3c82b91ebb282742c7a",url:"./tags/taxi-demands/index.html"},{revision:"6bc93d9af1a8fb3d588f410a08afc65c",url:"./tags/taxi-predict/index.html"},{revision:"42cec0ef66924af2e7e3d00b767d9c20",url:"./tags/traffic-flow/index.html"},{revision:"39832dba60d620bbcff3b05992103d94",url:"./tags/交通领域/index.html"},{revision:"c071781aff99fe1ddc1de624ccfe36f4",url:"./tags/期刊/index.html"},{revision:"cfd2efe4ab8b0f224e9e270b6983e7da",url:"./tags/论文笔记/index.html"}],{directoryIndex:null}),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new workbox.strategies.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets"})),workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.com/,new workbox.strategies.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdn\.jsdelivr\.net/,new workbox.strategies.CacheFirst({cacheName:"static-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();
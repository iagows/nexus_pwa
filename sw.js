if(!self.define){let e,a={};const i=(i,n)=>(i=new URL(i+".js",n).href,a[i]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=a,document.head.appendChild(e)}else e=i,importScripts(i),a()})).then((()=>{let e=a[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,s)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(a[r])return;let d={};const f=e=>i(e,r),l={module:{uri:r},exports:d,require:f};a[r]=Promise.all(n.map((e=>l[e]||f(e)))).then((e=>(s(...e),d)))}}define(["./workbox-e3490c72"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"apple-splash-landscape-dark-2048x1536.png",revision:"a13da8198c1a9a9ec736761639d5a7f6"},{url:"apple-splash-landscape-light-2048x1536.png",revision:"a13da8198c1a9a9ec736761639d5a7f6"},{url:"apple-splash-portrait-dark-1536x2048.png",revision:"f43bdaa826a80d0fc54da31140afac20"},{url:"apple-splash-portrait-light-1536x2048.png",revision:"f43bdaa826a80d0fc54da31140afac20"},{url:"apple-touch-icon-180x180.png",revision:"91052fc9d8e69464febb1ebf041ae4fc"},{url:"assets/empty-DNXjXPeC.jpg",revision:null},{url:"assets/index-fKh8V1Rd.js",revision:null},{url:"assets/non-empty-gVfR_qQk.jpg",revision:null},{url:"assets/workbox-window.prod.es5-B9K5rw8f.js",revision:null},{url:"favicon.ico",revision:"83cea2beaeed5734767ae3ade72af61f"},{url:"favicon.svg",revision:"18f2eeb155715f73672493b8bd6b588f"},{url:"icon-512.png",revision:"f3683d3b796239465845a4b070b41ac7"},{url:"index.html",revision:"376c46da8c2def1ad7a24454344e0886"},{url:"manifest.webmanifest",revision:"c9527ebe446877dadd41d2ad4ac364e0"},{url:"mask-icon.svg",revision:"18f2eeb155715f73672493b8bd6b588f"},{url:"maskable-icon-512x512.png",revision:"1f9e9dd2dc349553e80ea3bd89054381"},{url:"pwa-192x192.png",revision:"50172ec616c3e17fc22dc6fda2af243f"},{url:"pwa-512x512.png",revision:"f7f425776ec30e2168397094a63ddf7b"},{url:"pwa-64x64.png",revision:"959175fdc8930e50ea57883f603680a1"},{url:"pwa-64x64.png",revision:"959175fdc8930e50ea57883f603680a1"},{url:"pwa-192x192.png",revision:"50172ec616c3e17fc22dc6fda2af243f"},{url:"pwa-512x512.png",revision:"f7f425776ec30e2168397094a63ddf7b"},{url:"maskable-icon-512x512.png",revision:"1f9e9dd2dc349553e80ea3bd89054381"},{url:"manifest.webmanifest",revision:"c9527ebe446877dadd41d2ad4ac364e0"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));

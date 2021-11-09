'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "0306c4d4380ddb89585207951c421f54",
"index.html": "63ac9e1f4954a2d3ada4e546fd9dcd0f",
"/": "63ac9e1f4954a2d3ada4e546fd9dcd0f",
"main.dart.js": "c9b23cfd1b48b7539b68fdd39921f847",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "d1aecafd4e1e6827ca75a748e8d59bef",
"assets/AssetManifest.json": "b26e9617f800fccdd4a6e59e71b73ca7",
"assets/NOTICES": "e5ed6f89ce9e93606e321ba35a0b113e",
"assets/FontManifest.json": "b146974b0bd32f5006146947dd3c3935",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/loading_more_list/assets/empty.jpeg": "52a69bab9f87bcf0052d8e55ea314977",
"assets/packages/codefirst_progress_dialog/assets/double_ring_loading_io.gif": "e5b006904226dc824fdb6b8027f7d930",
"assets/packages/unicons/icons/UniconsLine.ttf": "30237e159b699f845847a18d1fe0c0cc",
"assets/packages/unicons/icons/UniconsSolid.ttf": "630f8bd494e53400fa9cda3a4eb8ec10",
"assets/packages/flutter_chat_ui/assets/icon-seen.png": "b9d597e29ff2802fd7e74c5086dfb106",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-seen.png": "10c256cc3c194125f8fffa25de5d6b8a",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-attachment.png": "9c8f255d58a0a4b634009e19d4f182fa",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-error.png": "5a59dc97f28a33691ff92d0a128c2b7f",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-send.png": "2a7d5341fd021e6b75842f6dadb623dd",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-document.png": "e61ec1c2da405db33bff22f774fb8307",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-delivered.png": "b6b5d85c3270a5cad19b74651d78c507",
"assets/packages/flutter_chat_ui/assets/icon-attachment.png": "17fc0472816ace725b2411c7e1450cdd",
"assets/packages/flutter_chat_ui/assets/icon-error.png": "4fceef32b6b0fd8782c5298ee463ea56",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-seen.png": "684348b596f7960e59e95cff5475b2f8",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-attachment.png": "fcf6bfd600820e85f90a846af94783f4",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-error.png": "872d7d57b8fff12c1a416867d6c1bc02",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-send.png": "8e7e62d5bc4a0e37e3f953fb8af23d97",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-document.png": "4578cb3d3f316ef952cd2cf52f003df2",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-delivered.png": "28f141c87a74838fc20082e9dea44436",
"assets/packages/flutter_chat_ui/assets/icon-send.png": "34e43bc8840ecb609e14d622569cda6a",
"assets/packages/flutter_chat_ui/assets/icon-document.png": "b4477562d9152716c062b6018805d10b",
"assets/packages/flutter_chat_ui/assets/icon-delivered.png": "b064b7cf3e436d196193258848eae910",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/email.png": "0fe2fb49caf67b3a52d1e2ad243d4006",
"assets/assets/bs-user.svg": "084f090c03cc804544c1a2def167739a",
"assets/assets/rectangle.svg": "7fa61ecca8689befc047d2c282c71a15",
"assets/assets/user-mobs.svg": "c4b56d1ffea9721561e1b4b0dd8497ed",
"assets/assets/uau.png": "eb40a6f5aeef1eaf0047a07ac99a096e",
"assets/assets/flutter_image.jpg": "5937e9d7d31a2a56a09bba1062f09606",
"assets/assets/images/email.png": "0fe2fb49caf67b3a52d1e2ad243d4006",
"assets/assets/images/ic_launcher_basic.png": "efd14dddf89701bb3d4e769759662d96",
"assets/assets/images/rectangle.svg": "7fa61ecca8689befc047d2c282c71a15",
"assets/assets/images/imgmock.jpg": "4924208b33d4f44f8901d219a6483f9a",
"assets/assets/images/recblue.svg": "cfdcadea589686a50c99067cb4a43a04",
"assets/assets/images/flutter_image.jpg": "5937e9d7d31a2a56a09bba1062f09606",
"assets/assets/images/logomsg.svg": "5b6cbd49e269aa86b9871b2d868f5a5a",
"assets/assets/images/lego.png": "7fa025162d1953cc062874be31f752ab",
"assets/assets/images/ac.svg": "1870c1d18530ca35c98534285312954c",
"assets/assets/images/bird.jpg": "c57d6f2577f025683ca83f9513a2906f",
"assets/assets/images/user_big.svg": "b4bc25861a692ebe49a18a3ac794f39c",
"assets/assets/images/passadeira.png": "065ffa8d2b128d487c597cdc48689cc0",
"assets/assets/images/email.svg": "cca878c81a3f9724d4867637a208e7bb",
"assets/assets/images/image.svg": "aed25b9f67d4895e1535e992c7da9a6a",
"assets/assets/images/setting.svg": "bc66bc979a9d9ec9287e2dde790bb691",
"assets/assets/images/menu.png": "24085b165cf07dbb15583b1fa0ea583d",
"assets/assets/images/profile_pic.png": "5f56c3070f1c066ae15ecad12fb44f54",
"assets/assets/images/rec.svg": "7ed2c0584fc2df1eec2e8c307cc5ca64",
"assets/assets/images/star.svg": "072bb0148a5892afa882ded80cf20aad",
"assets/assets/images/mot.png": "14da80296a01fffc94bdb5629ddf0c87",
"assets/assets/images/exit.svg": "f8bea8ed7f5ef344b7e04d83b5c77474",
"assets/assets/images/call.svg": "af2e03dbc246023337f9b80bb9eeb293",
"assets/assets/images/logofinal.png": "ba1a39165c3af810c42467b951540eb2",
"assets/assets/images/noimage.jpg": "a18f1a02c573737f94eaa2e4066f0542",
"assets/assets/images/motora.png": "467a1b3c0ec9b42e1b2118a22386c4a6",
"assets/assets/images/noimgaesquare.jpg": "e0ebf07e17f329fe86f3ee81d2a4aacc",
"assets/assets/images/churras.png": "a75e4987fd6e291ccccfd02539f3ffc4",
"assets/assets/images/recgreen.svg": "6a13ba8c60d5b03cb9b6e77c61ec9daf",
"assets/assets/images/fund.png": "7cf05353dee77d645cc4fa9c627265b3",
"assets/assets/logomsg.svg": "5b6cbd49e269aa86b9871b2d868f5a5a",
"assets/assets/lego.png": "7fa025162d1953cc062874be31f752ab",
"assets/assets/uau.json": "90609269ebc9ca7674b2924b1d0b73e7",
"assets/assets/uau2.png": "7be856bccc3c9ece3de67b7ab8348e2b",
"assets/assets/bird.jpg": "c57d6f2577f025683ca83f9513a2906f",
"assets/assets/screen1.svg": "90138f5f27c1714109bb34013549c858",
"assets/assets/user_big.svg": "b4bc25861a692ebe49a18a3ac794f39c",
"assets/assets/bs-user.png": "14fc7531414e8165b97cafa7414d1746",
"assets/assets/bs.svg": "420ba388a67a4175ff9902ee73116d3d",
"assets/assets/menu.png": "24085b165cf07dbb15583b1fa0ea583d",
"assets/assets/icons/Search.svg": "396d519c18918ed763d741f4ba90243a",
"assets/assets/icons/google_drive.svg": "9a3005a58d47a11bfeffc11ddd3567c1",
"assets/assets/icons/menu_setting.svg": "d0e24d5d0956729e0e2ab09cb4327e32",
"assets/assets/icons/menu_dashbord.svg": "b2cdf62e9ce9ca35f3fc72f1c1fcc7d4",
"assets/assets/icons/doc_file.svg": "552a02a5a3dbaee682de14573f0ca9f3",
"assets/assets/icons/unknown.svg": "b2f3cdc507252d75dea079282f14614f",
"assets/assets/icons/menu_task.svg": "1a02d1c14f49a765da34487d23a3093b",
"assets/assets/icons/menu_profile.svg": "fe56f998a7c1b307809ea3653a1b62f9",
"assets/assets/icons/menu_store.svg": "2fd4ae47fd0fca084e50a600dda008cd",
"assets/assets/icons/sound_file.svg": "fe212d5edfddd0786319edf50601ec73",
"assets/assets/icons/pdf_file.svg": "ca854643eeee7bedba7a1d550e2ba94f",
"assets/assets/icons/drop_box.svg": "3295157e194179743d6093de9f1ff254",
"assets/assets/icons/xd_file.svg": "38913b108e39bcd55988050d2d80194c",
"assets/assets/icons/menu_tran.svg": "6c95fa7ae6679737dc57efd2ccbb0e57",
"assets/assets/icons/media.svg": "059dfe46bd2d92e30bf361c2f7055c3b",
"assets/assets/icons/menu_doc.svg": "09673c2879de2db9646345011dbaa7bb",
"assets/assets/icons/Figma_file.svg": "0ae328b79325e7615054aed3147c81f9",
"assets/assets/icons/menu_notification.svg": "460268d6e4bdeab56538d7020cc4b326",
"assets/assets/icons/logo.svg": "b3af0c077a73709c992d7e075b76ce33",
"assets/assets/icons/media_file.svg": "2ac15c968f8a8cea571a0f3e9f238a66",
"assets/assets/icons/folder.svg": "40a82e74e930ac73aa6ccb85d8c5a29c",
"assets/assets/icons/Documents.svg": "51896b51d35e28711cf4bd218bde185d",
"assets/assets/icons/excle_file.svg": "dc91b258ecf87f5731fb2ab9ae15a3ec",
"assets/assets/icons/one_drive.svg": "aa908c0a29eb795606799385cdfc8592",
"assets/assets/logofinal.png": "ba1a39165c3af810c42467b951540eb2"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

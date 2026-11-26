// Offline copy of Spikemark. App data lives in IndexedDB; this saves the app's own files so it opens without a network
// (rehearsal rooms, booths). The build writes BUILD and FILES below (vite.config.ts), and every file is saved when the
// worker installs, so one open on a network is enough, screens not visited yet included.
// The app opens from its own saved files, so what runs is always one whole version. A new version downloads in the
// background and waits; it takes over only when the app says so (never during a show: features/collab/appUpdate.ts), or
// once every window of the old one has closed. If that happens during a show (the app killed and relaunched), it keeps
// serving the files the show started on until the app says the show is over. Cross-origin and API requests are never
// cached.
const BUILD = '5662d136fbe9c301';
const FILES = ["./apple-touch-icon.png","./assets/AccountPage-DlVRvb4e.js","./assets/AdminPage-B4sj3h3Y.css","./assets/AdminPage-BOXgseUE.js","./assets/ChartEditor-CpJNQZgC.css","./assets/ChartEditor-yj9SGSCY.js","./assets/CommandPalette-CXRsCrcX.js","./assets/Company-BDh-73ho.css","./assets/Company-BlzvWdmd.js","./assets/HelpLayer-BbZnSjw8.js","./assets/OrgPage-j3-oiAwP.js","./assets/PovPicker-Cc92TzBq.js","./assets/PrintApprovals-DA_EZrZh.js","./assets/ProductionSettings-C8Th-3rb.css","./assets/ProductionSettings-DrpcDQYA.js","./assets/ProductionShell-BxzNfygT.css","./assets/ProductionShell-D-SjrVCP.js","./assets/Reports-B1VhH_Ne.css","./assets/Reports-BQnIr3Dz.js","./assets/ScanPage-rbVZOx_p.js","./assets/ScriptEditor-1WiCGhf0.css","./assets/ScriptEditor-Cbc8A4pQ.js","./assets/SignUpPage-DmDzu8Hq.css","./assets/SignUpPage-ouAu8UYu.js","./assets/SplitView-B0c6dcvl.js","./assets/StaffEditor-B8uBmbgU.js","./assets/Venues-DG7UTBfK.js","./assets/archive-C3FVdq7X.js","./assets/breakdown-sRmFJAVt.js","./assets/browser-C8cc1i9H.js","./assets/callShow-BxFUwvut.js","./assets/callStore-DwCdtoIU.js","./assets/checklistActions-DDozsDHq.js","./assets/checklists-CsiTJxpD.js","./assets/chevron-down-C2vycapJ.js","./assets/chevron-left-dcYFZ6KF.js","./assets/chevron-right-W-gGHUQF.js","./assets/collab-CTSfLqsi.css","./assets/common-CUvcqivn.js","./assets/createLucideIcon-9h-ywv2P.js","./assets/csv-Trf_zjXR.js","./assets/cueCheckpoints-CyBZJ5i1.js","./assets/db-Cm-GNVVU.js","./assets/decode-qJYqRvlw.js","./assets/defaults-CsRUj2qM.js","./assets/demo-BJ9jQJNL.js","./assets/dwell-BL2mUbX7.js","./assets/entityOps-D3oINsNl.js","./assets/external-link-CtW6HnVS.js","./assets/fields-B_9sNHhr.js","./assets/file-up-BAJRpCF3.js","./assets/fpsMeter-CegAj6uS.js","./assets/ibm-plex-mono-cyrillic-400-normal-BSMlKf0J.woff2","./assets/ibm-plex-mono-cyrillic-500-normal-Bq9vWWag.woff2","./assets/ibm-plex-mono-cyrillic-ext-400-normal-xuaO2J-f.woff2","./assets/ibm-plex-mono-cyrillic-ext-500-normal-BqneJy0T.woff2","./assets/ibm-plex-mono-latin-400-normal-DMJ8VG8y.woff2","./assets/ibm-plex-mono-latin-500-normal-DSY6xOcd.woff2","./assets/ibm-plex-mono-latin-ext-400-normal-BmRBH3aV.woff2","./assets/ibm-plex-mono-latin-ext-500-normal-CAhNIIs5.woff2","./assets/ibm-plex-mono-vietnamese-400-normal-BulugwFq.woff2","./assets/ibm-plex-mono-vietnamese-500-normal-DZ4AoWbu.woff2","./assets/ibm-plex-sans-cyrillic-400-normal-DZqxrq2p.woff2","./assets/ibm-plex-sans-cyrillic-500-normal-CocWQlwt.woff2","./assets/ibm-plex-sans-cyrillic-600-normal-71GNu3SW.woff2","./assets/ibm-plex-sans-cyrillic-ext-400-normal-g30qAdWV.woff2","./assets/ibm-plex-sans-cyrillic-ext-500-normal-Cs5J6C77.woff2","./assets/ibm-plex-sans-cyrillic-ext-600-normal-DUMzJB7m.woff2","./assets/ibm-plex-sans-greek-400-normal-_efipK4i.woff2","./assets/ibm-plex-sans-greek-500-normal-JMMifIXV.woff2","./assets/ibm-plex-sans-greek-600-normal-DzTrcv_p.woff2","./assets/ibm-plex-sans-latin-400-normal-CDDApCn2.woff2","./assets/ibm-plex-sans-latin-500-normal-6ng42L7E.woff2","./assets/ibm-plex-sans-latin-600-normal-CuJfVYMP.woff2","./assets/ibm-plex-sans-latin-ext-400-normal-C5H60-Va.woff2","./assets/ibm-plex-sans-latin-ext-500-normal-DakdToA3.woff2","./assets/ibm-plex-sans-latin-ext-600-normal-DOrvGEcy.woff2","./assets/ibm-plex-sans-vietnamese-400-normal-DG4YqDda.woff2","./assets/ibm-plex-sans-vietnamese-500-normal-e4dixQRQ.woff2","./assets/ibm-plex-sans-vietnamese-600-normal-DpPYBSTl.woff2","./assets/inbox-Ci2GdKMJ.js","./assets/incidents-BEdRWYTn.js","./assets/index-DX0_bQ0c.js","./assets/index-VzATe8K2.css","./assets/inter-cyrillic-ext-wght-normal-BOeWTOD4.woff2","./assets/inter-cyrillic-wght-normal-DqGufNeO.woff2","./assets/inter-greek-ext-wght-normal-DlzME5K_.woff2","./assets/inter-greek-wght-normal-CkhJZR-_.woff2","./assets/inter-latin-ext-wght-normal-DO1Apj_S.woff2","./assets/inter-latin-wght-normal-Dx4kXJAl.woff2","./assets/inter-vietnamese-wght-normal-CBcvBZtf.woff2","./assets/issueText-CZ92nXyT.js","./assets/issues-BqVe_0A6.js","./assets/journal-rNi4hyqE.js","./assets/kit-CmCu15QF.js","./assets/labCommit-DOaQ4JYK.js","./assets/ledger-DDRqjHb-.js","./assets/lineNotes-HZqnnx1F.js","./assets/link-2-C04AohAu.js","./assets/maximize-2-DGFZUuKg.js","./assets/minus-BsJ1CoZd.js","./assets/mix-CMnvJ2ca.js","./assets/ops-B8SNv3aL.js","./assets/orgs-DQrOTwBS.css","./assets/overlayWorker-Cgdz0N4m.js","./assets/pageNumbering-Ceqd79Tv.js","./assets/palette-CrLoJF4L.js","./assets/panel-left-CThn62QX.js","./assets/paperwork-CESEObY5.js","./assets/pdf-DOo-miEU.js","./assets/pdf.worker.min-CjEcRF4W.mjs","./assets/pdfDraw.worker-CP76Yn-b.js","./assets/pdfEngine-BSSB8hWw.js","./assets/pdfWriter-BH2EuDHu.js","./assets/pencil-CKVNl_fm.js","./assets/perfReport-B3BbQZVc.js","./assets/pin-C8ZVebmp.js","./assets/pin-off-lGdQve1y.js","./assets/printcodes-BY-9XhS3.css","./assets/printcodes-CRqIXYmJ.js","./assets/react-BdmHECUP.js","./assets/react-Dt1HO54A.js","./assets/rolldown-runtime-XKyaHtl9.js","./assets/rotate-ccw-CrkAER_Q.js","./assets/rows-3-DYSP3n9O.js","./assets/rows-BsonV-Ye.js","./assets/runStats-B3-6wUDW.js","./assets/safety-BpOaUl0A.js","./assets/safety-i8rN1Yam.css","./assets/scriptPage-BHiwsKVh.js","./assets/scriptPage-arvvS2-G.css","./assets/send-CF4NVV6Q.js","./assets/server.browser-2cKzxFQ0.js","./assets/session-BI53AvfI.js","./assets/settings-DCpPwqyw.js","./assets/settings-fxkrm5oQ.css","./assets/shifts-BFVfFCO7.js","./assets/shifts-CH_1gFJl.css","./assets/showLog-D6tvpc4F.js","./assets/signoff-BC2d3AWc.js","./assets/speakers-Cg4ECE0j.js","./assets/staff-CVHn_496.css","./assets/staff-DUuOAKBS.js","./assets/templates-BnM7uCxl.js","./assets/textDefaults-BbSIEJSn.js","./assets/triangle-alert-to0Wqevf.js","./assets/ui-Capls3Yh.js","./assets/underline-C4PR-PpI.js","./assets/undoToast-djKPD3Oz.js","./assets/useNarrowWindow-ACbKqzaK.js","./assets/useNow-BFWOAMuF.js","./assets/useSpeechIndex-Cuht8S5J.js","./assets/user-plus-CqkmkgT-.js","./assets/x-fUdV4iro.js","./boot.js","./icon.svg","./index.html","./manifest.webmanifest","./pdfjs/cmaps/78-EUC-H.bcmap","./pdfjs/cmaps/78-EUC-V.bcmap","./pdfjs/cmaps/78-H.bcmap","./pdfjs/cmaps/78-RKSJ-H.bcmap","./pdfjs/cmaps/78-RKSJ-V.bcmap","./pdfjs/cmaps/78-V.bcmap","./pdfjs/cmaps/78ms-RKSJ-H.bcmap","./pdfjs/cmaps/78ms-RKSJ-V.bcmap","./pdfjs/cmaps/83pv-RKSJ-H.bcmap","./pdfjs/cmaps/90ms-RKSJ-H.bcmap","./pdfjs/cmaps/90ms-RKSJ-V.bcmap","./pdfjs/cmaps/90msp-RKSJ-H.bcmap","./pdfjs/cmaps/90msp-RKSJ-V.bcmap","./pdfjs/cmaps/90pv-RKSJ-H.bcmap","./pdfjs/cmaps/90pv-RKSJ-V.bcmap","./pdfjs/cmaps/Add-H.bcmap","./pdfjs/cmaps/Add-RKSJ-H.bcmap","./pdfjs/cmaps/Add-RKSJ-V.bcmap","./pdfjs/cmaps/Add-V.bcmap","./pdfjs/cmaps/Adobe-CNS1-0.bcmap","./pdfjs/cmaps/Adobe-CNS1-1.bcmap","./pdfjs/cmaps/Adobe-CNS1-2.bcmap","./pdfjs/cmaps/Adobe-CNS1-3.bcmap","./pdfjs/cmaps/Adobe-CNS1-4.bcmap","./pdfjs/cmaps/Adobe-CNS1-5.bcmap","./pdfjs/cmaps/Adobe-CNS1-6.bcmap","./pdfjs/cmaps/Adobe-CNS1-UCS2.bcmap","./pdfjs/cmaps/Adobe-GB1-0.bcmap","./pdfjs/cmaps/Adobe-GB1-1.bcmap","./pdfjs/cmaps/Adobe-GB1-2.bcmap","./pdfjs/cmaps/Adobe-GB1-3.bcmap","./pdfjs/cmaps/Adobe-GB1-4.bcmap","./pdfjs/cmaps/Adobe-GB1-5.bcmap","./pdfjs/cmaps/Adobe-GB1-UCS2.bcmap","./pdfjs/cmaps/Adobe-Japan1-0.bcmap","./pdfjs/cmaps/Adobe-Japan1-1.bcmap","./pdfjs/cmaps/Adobe-Japan1-2.bcmap","./pdfjs/cmaps/Adobe-Japan1-3.bcmap","./pdfjs/cmaps/Adobe-Japan1-4.bcmap","./pdfjs/cmaps/Adobe-Japan1-5.bcmap","./pdfjs/cmaps/Adobe-Japan1-6.bcmap","./pdfjs/cmaps/Adobe-Japan1-UCS2.bcmap","./pdfjs/cmaps/Adobe-Korea1-0.bcmap","./pdfjs/cmaps/Adobe-Korea1-1.bcmap","./pdfjs/cmaps/Adobe-Korea1-2.bcmap","./pdfjs/cmaps/Adobe-Korea1-UCS2.bcmap","./pdfjs/cmaps/B5-H.bcmap","./pdfjs/cmaps/B5-V.bcmap","./pdfjs/cmaps/B5pc-H.bcmap","./pdfjs/cmaps/B5pc-V.bcmap","./pdfjs/cmaps/CNS-EUC-H.bcmap","./pdfjs/cmaps/CNS-EUC-V.bcmap","./pdfjs/cmaps/CNS1-H.bcmap","./pdfjs/cmaps/CNS1-V.bcmap","./pdfjs/cmaps/CNS2-H.bcmap","./pdfjs/cmaps/CNS2-V.bcmap","./pdfjs/cmaps/ETHK-B5-H.bcmap","./pdfjs/cmaps/ETHK-B5-V.bcmap","./pdfjs/cmaps/ETen-B5-H.bcmap","./pdfjs/cmaps/ETen-B5-V.bcmap","./pdfjs/cmaps/ETenms-B5-H.bcmap","./pdfjs/cmaps/ETenms-B5-V.bcmap","./pdfjs/cmaps/EUC-H.bcmap","./pdfjs/cmaps/EUC-V.bcmap","./pdfjs/cmaps/Ext-H.bcmap","./pdfjs/cmaps/Ext-RKSJ-H.bcmap","./pdfjs/cmaps/Ext-RKSJ-V.bcmap","./pdfjs/cmaps/Ext-V.bcmap","./pdfjs/cmaps/GB-EUC-H.bcmap","./pdfjs/cmaps/GB-EUC-V.bcmap","./pdfjs/cmaps/GB-H.bcmap","./pdfjs/cmaps/GB-V.bcmap","./pdfjs/cmaps/GBK-EUC-H.bcmap","./pdfjs/cmaps/GBK-EUC-V.bcmap","./pdfjs/cmaps/GBK2K-H.bcmap","./pdfjs/cmaps/GBK2K-V.bcmap","./pdfjs/cmaps/GBKp-EUC-H.bcmap","./pdfjs/cmaps/GBKp-EUC-V.bcmap","./pdfjs/cmaps/GBT-EUC-H.bcmap","./pdfjs/cmaps/GBT-EUC-V.bcmap","./pdfjs/cmaps/GBT-H.bcmap","./pdfjs/cmaps/GBT-V.bcmap","./pdfjs/cmaps/GBTpc-EUC-H.bcmap","./pdfjs/cmaps/GBTpc-EUC-V.bcmap","./pdfjs/cmaps/GBpc-EUC-H.bcmap","./pdfjs/cmaps/GBpc-EUC-V.bcmap","./pdfjs/cmaps/H.bcmap","./pdfjs/cmaps/HKdla-B5-H.bcmap","./pdfjs/cmaps/HKdla-B5-V.bcmap","./pdfjs/cmaps/HKdlb-B5-H.bcmap","./pdfjs/cmaps/HKdlb-B5-V.bcmap","./pdfjs/cmaps/HKgccs-B5-H.bcmap","./pdfjs/cmaps/HKgccs-B5-V.bcmap","./pdfjs/cmaps/HKm314-B5-H.bcmap","./pdfjs/cmaps/HKm314-B5-V.bcmap","./pdfjs/cmaps/HKm471-B5-H.bcmap","./pdfjs/cmaps/HKm471-B5-V.bcmap","./pdfjs/cmaps/HKscs-B5-H.bcmap","./pdfjs/cmaps/HKscs-B5-V.bcmap","./pdfjs/cmaps/Hankaku.bcmap","./pdfjs/cmaps/Hiragana.bcmap","./pdfjs/cmaps/KSC-EUC-H.bcmap","./pdfjs/cmaps/KSC-EUC-V.bcmap","./pdfjs/cmaps/KSC-H.bcmap","./pdfjs/cmaps/KSC-Johab-H.bcmap","./pdfjs/cmaps/KSC-Johab-V.bcmap","./pdfjs/cmaps/KSC-V.bcmap","./pdfjs/cmaps/KSCms-UHC-H.bcmap","./pdfjs/cmaps/KSCms-UHC-HW-H.bcmap","./pdfjs/cmaps/KSCms-UHC-HW-V.bcmap","./pdfjs/cmaps/KSCms-UHC-V.bcmap","./pdfjs/cmaps/KSCpc-EUC-H.bcmap","./pdfjs/cmaps/KSCpc-EUC-V.bcmap","./pdfjs/cmaps/Katakana.bcmap","./pdfjs/cmaps/LICENSE","./pdfjs/cmaps/NWP-H.bcmap","./pdfjs/cmaps/NWP-V.bcmap","./pdfjs/cmaps/RKSJ-H.bcmap","./pdfjs/cmaps/RKSJ-V.bcmap","./pdfjs/cmaps/Roman.bcmap","./pdfjs/cmaps/UniCNS-UCS2-H.bcmap","./pdfjs/cmaps/UniCNS-UCS2-V.bcmap","./pdfjs/cmaps/UniCNS-UTF16-H.bcmap","./pdfjs/cmaps/UniCNS-UTF16-V.bcmap","./pdfjs/cmaps/UniCNS-UTF32-H.bcmap","./pdfjs/cmaps/UniCNS-UTF32-V.bcmap","./pdfjs/cmaps/UniCNS-UTF8-H.bcmap","./pdfjs/cmaps/UniCNS-UTF8-V.bcmap","./pdfjs/cmaps/UniGB-UCS2-H.bcmap","./pdfjs/cmaps/UniGB-UCS2-V.bcmap","./pdfjs/cmaps/UniGB-UTF16-H.bcmap","./pdfjs/cmaps/UniGB-UTF16-V.bcmap","./pdfjs/cmaps/UniGB-UTF32-H.bcmap","./pdfjs/cmaps/UniGB-UTF32-V.bcmap","./pdfjs/cmaps/UniGB-UTF8-H.bcmap","./pdfjs/cmaps/UniGB-UTF8-V.bcmap","./pdfjs/cmaps/UniJIS-UCS2-H.bcmap","./pdfjs/cmaps/UniJIS-UCS2-HW-H.bcmap","./pdfjs/cmaps/UniJIS-UCS2-HW-V.bcmap","./pdfjs/cmaps/UniJIS-UCS2-V.bcmap","./pdfjs/cmaps/UniJIS-UTF16-H.bcmap","./pdfjs/cmaps/UniJIS-UTF16-V.bcmap","./pdfjs/cmaps/UniJIS-UTF32-H.bcmap","./pdfjs/cmaps/UniJIS-UTF32-V.bcmap","./pdfjs/cmaps/UniJIS-UTF8-H.bcmap","./pdfjs/cmaps/UniJIS-UTF8-V.bcmap","./pdfjs/cmaps/UniJIS2004-UTF16-H.bcmap","./pdfjs/cmaps/UniJIS2004-UTF16-V.bcmap","./pdfjs/cmaps/UniJIS2004-UTF32-H.bcmap","./pdfjs/cmaps/UniJIS2004-UTF32-V.bcmap","./pdfjs/cmaps/UniJIS2004-UTF8-H.bcmap","./pdfjs/cmaps/UniJIS2004-UTF8-V.bcmap","./pdfjs/cmaps/UniJISPro-UCS2-HW-V.bcmap","./pdfjs/cmaps/UniJISPro-UCS2-V.bcmap","./pdfjs/cmaps/UniJISPro-UTF8-V.bcmap","./pdfjs/cmaps/UniJISX0213-UTF32-H.bcmap","./pdfjs/cmaps/UniJISX0213-UTF32-V.bcmap","./pdfjs/cmaps/UniJISX02132004-UTF32-H.bcmap","./pdfjs/cmaps/UniJISX02132004-UTF32-V.bcmap","./pdfjs/cmaps/UniKS-UCS2-H.bcmap","./pdfjs/cmaps/UniKS-UCS2-V.bcmap","./pdfjs/cmaps/UniKS-UTF16-H.bcmap","./pdfjs/cmaps/UniKS-UTF16-V.bcmap","./pdfjs/cmaps/UniKS-UTF32-H.bcmap","./pdfjs/cmaps/UniKS-UTF32-V.bcmap","./pdfjs/cmaps/UniKS-UTF8-H.bcmap","./pdfjs/cmaps/UniKS-UTF8-V.bcmap","./pdfjs/cmaps/V.bcmap","./pdfjs/cmaps/WP-Symbol.bcmap","./pdfjs/standard_fonts/FoxitDingbats.pfb","./pdfjs/standard_fonts/FoxitFixed.pfb","./pdfjs/standard_fonts/FoxitFixedBold.pfb","./pdfjs/standard_fonts/FoxitFixedBoldItalic.pfb","./pdfjs/standard_fonts/FoxitFixedItalic.pfb","./pdfjs/standard_fonts/FoxitSerif.pfb","./pdfjs/standard_fonts/FoxitSerifBold.pfb","./pdfjs/standard_fonts/FoxitSerifBoldItalic.pfb","./pdfjs/standard_fonts/FoxitSerifItalic.pfb","./pdfjs/standard_fonts/FoxitSymbol.pfb","./pdfjs/standard_fonts/LICENSE_FOXIT","./pdfjs/standard_fonts/LICENSE_LIBERATION","./pdfjs/standard_fonts/LiberationSans-Bold.ttf","./pdfjs/standard_fonts/LiberationSans-BoldItalic.ttf","./pdfjs/standard_fonts/LiberationSans-Italic.ttf","./pdfjs/standard_fonts/LiberationSans-Regular.ttf","./pdfjs/wasm/LICENSE_JBIG2","./pdfjs/wasm/LICENSE_OPENJPEG","./pdfjs/wasm/LICENSE_PDFJS_JBIG2","./pdfjs/wasm/LICENSE_PDFJS_OPENJPEG","./pdfjs/wasm/LICENSE_PDFJS_QCMS","./pdfjs/wasm/LICENSE_QCMS","./pdfjs/wasm/jbig2.wasm","./pdfjs/wasm/jbig2_nowasm_fallback.js","./pdfjs/wasm/openjpeg.wasm","./pdfjs/wasm/openjpeg_nowasm_fallback.js","./pdfjs/wasm/qcms_bg.wasm","./pdfjs/wasm/quickjs-eval.js","./pdfjs/wasm/quickjs-eval.wasm"];
const PREFIX = 'spikemark-shell-';
const CACHE = `${PREFIX}${BUILD}`;
const APP_ROOT = new URL('./', self.location.href).pathname;
const isAppPage = (url) => url.pathname === APP_ROOT || url.pathname === `${APP_ROOT}index.html`;

self.addEventListener('install', (event) => {
  // no-cache: a copy from the browser's HTTP cache could be an older index.html that points at files of another build.
  event.waitUntil(caches.open(CACHE).then((c) => c.addAll(FILES.map((f) => new Request(f, { cache: 'no-cache' })))));
});

// Which version last ran, so the one a page may still be open on is kept: a version that only waited and was then
// replaced never ran anywhere, and keeping it instead would delete the files a show window is using.
const META = 'spikemark-meta';
const ACTIVE = './active-build';
// The version a show is being called on, while a performance is underway: { build, until }. Past `until` (when the app
// said the show would count as over, at most PIN_MS after it last said so) it pins nothing.
const PIN = './pinned-build';
const PIN_MS = 12 * 3600 * 1000;

/** The pin as stored: read once per worker start, kept up to date by the messages below, its time checked each use. */
let pinned;
async function readPin() {
  if (pinned === undefined) {
    pinned = null;
    const res = await (await caches.open(META)).match(PIN);
    if (res) {
      try {
        const p = JSON.parse(await res.text());
        // An older pin has `at` (when it was set) rather than `until`.
        const until = typeof p.until === 'number' ? p.until : typeof p.at === 'number' ? p.at + PIN_MS : 0;
        if (p && typeof p.build === 'string') pinned = { build: p.build, until };
      } catch {
        // a damaged pin pins nothing
      }
    }
  }
  return pinned && Date.now() < pinned.until ? pinned.build : null;
}

/** Which saved build holds this address (the page's own script): the build the page is running. */
async function buildHolding(url) {
  if (typeof url !== 'string') return null;
  for (const name of await caches.keys()) {
    if (!name.startsWith(PREFIX)) continue;
    if (await (await caches.open(name)).match(url)) return name.slice(PREFIX.length);
  }
  return null;
}

/** The cache to serve from first: the pinned version's while a show runs on it, else this version's own. */
async function servingCache() {
  const build = await readPin();
  return build && build !== BUILD ? `${PREFIX}${build}` : CACHE;
}

/** Show messages, one at a time in the order they came: a slow "on" must not land after the "over" that followed it. */
let showMessages = Promise.resolve();

self.addEventListener('message', (event) => {
  const data = event.data;
  if (data && data.type === 'apply-update') self.skipWaiting();
  if (!data || data.type !== 'show') return;
  const source = event.source;
  showMessages = showMessages
    .then(async () => {
      const meta = await caches.open(META);
      const was = await readPin();
      if (data.underway) {
        // The build the page runs, found by its own script; else what is pinned; else this one.
        const build = (await buildHolding(data.entry)) ?? was ?? BUILD;
        const now = Date.now();
        const until = typeof data.until === 'number' && data.until > now ? Math.min(data.until, now + PIN_MS) : now + PIN_MS;
        pinned = { build, until };
        await meta.put(PIN, new Response(JSON.stringify(pinned)));
        return;
      }
      pinned = null;
      await meta.delete(PIN);
      // The show ran on older files than this version's: a reload now brings the new one.
      if (was && was !== BUILD && source) source.postMessage({ type: 'pin-released' });
    })
    .catch(() => undefined);
  event.waitUntil(showMessages);
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      const meta = await caches.open(META);
      const before = await meta.match(ACTIVE);
      const ran = before ? `${PREFIX}${await before.text()}` : null;
      const older = (await caches.keys()).filter((k) => k.startsWith(PREFIX) && k !== CACHE);
      const keep = ran && older.includes(ran) ? ran : older.at(-1);
      // A show running on another version's files keeps them, whichever ran last.
      const build = await readPin();
      const show = build ? `${PREFIX}${build}` : null;
      await Promise.all(older.filter((k) => k !== keep && k !== show).map((k) => caches.delete(k)));
      await meta.put(ACTIVE, new Response(BUILD));
      await self.clients.claim();
    })(),
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin || url.pathname.startsWith('/api/') || url.pathname.startsWith('/ws')) return;

  if (req.mode === 'navigate') {
    // The page is the one saved with this build's files. A newer page from the network is neither shown nor kept: it
    // points at files this version did not save, so a relaunch on poor wifi would open a version it cannot finish loading.
    const saved = () =>
      servingCache()
        .then((name) => caches.open(name))
        .then((c) => c.match('./index.html'))
        .then((page) => page || caches.open(CACHE).then((c) => c.match('./index.html')));
    event.respondWith(isAppPage(url) ? saved().then((page) => page || fetch(req)) : fetch(req).catch(saved));
    return;
  }

  event.respondWith(
    servingCache()
      .then((name) => caches.open(name))
      .then((c) => c.match(req))
      .then((hit) => hit || caches.open(CACHE).then((c) => c.match(req)))
      .then((hit) => hit || caches.match(req))
      .then(
        (hit) =>
          hit ||
          fetch(req).then((res) => {
            if (res.ok && res.type === 'basic') {
              const copy = res.clone();
              caches.open(CACHE).then((c) => c.put(req, copy));
            }
            return res;
          }),
      ),
  );
});

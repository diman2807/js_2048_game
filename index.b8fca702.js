// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"8bDoD":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "5a1bda1ab8fca702";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"3cYfC":[function(require,module,exports) {
"use strict";
// Uncomment the next lines to use your game instance in the browser
const Game = require("789b00406e138236");
const game = new Game();
// Write your code here
const body = document.body;
const startButton = body.querySelector(".button");
const table = body.querySelector(".game-field");
const scoreTablet = body.querySelector(".info");
const infoBlock = body.querySelector(".message-container");
const messageWin = infoBlock.querySelector(".message.message-win");
const messageLost = infoBlock.querySelector(".message.message-lose");
const messageStart = infoBlock.querySelector(".message.message-start");
function platesColor(rows, field) {
    const values = [
        2,
        4,
        8,
        16,
        32,
        64,
        128,
        256,
        512,
        1024,
        2048
    ];
    for(let i = 0; i < field.length; i++){
        const cells = Array.from(rows[i].querySelectorAll(".field-cell"));
        for(let j = 0; j < field[i].length; j++){
            const value = +cells[j].textContent;
            values.forEach((val)=>cells[j].classList.remove(`field-cell--${val}`));
            if (value !== 0) cells[j].classList.add(`field-cell--${value}`);
        }
    }
}
function stateReplacing(gameTable) {
    const rows = Array.from(gameTable.querySelectorAll(".field-row"));
    const field = game.getState();
    for(let i = 0; i < field.length; i++){
        const cells = Array.from(rows[i].querySelectorAll(".field-cell"));
        for(let j = 0; j < field[i].length; j++)if (field[i][j] !== 0) cells[j].textContent = field[i][j];
        else cells[j].textContent = "";
    }
    platesColor(rows, field);
    const animationCoords = game.getAnimatedCoords();
    for (const [row, col] of animationCoords){
        const cells = rows[row].querySelectorAll(".field-cell");
        cells[col].classList.add("apear-animation");
        cells[col].addEventListener("animationend", (e)=>{
            e.currentTarget.classList.remove("apear-animation");
        }, {
            once: true
        });
    }
    const unitedCoords = game.getUnitedCoords();
    for (const [row, col] of unitedCoords){
        const cells = rows[row].querySelectorAll(".field-cell");
        cells[col].classList.add("merge-animation");
        cells[col].addEventListener("animationend", (e)=>{
            e.currentTarget.classList.remove("merge-animation");
        }, {
            once: true
        });
    }
    game.apearCells.length = 0;
    game.unitedCells.length = 0;
    scoreReloading(scoreTablet);
}
function scoreReloading(scoreValue) {
    const score = game.getScore();
    const gameScore = scoreValue.querySelector(".game-score");
    gameScore.textContent = score;
}
function hasWonOrLost() {
    const currentStatus = game.getStatus();
    if (currentStatus === "won") {
        infoBlock.classList.remove("hidden");
        messageWin.classList.remove("hidden");
        messageLost.classList.add("hidden");
    } else if (currentStatus === "lost") {
        infoBlock.classList.remove("hidden");
        messageLost.classList.remove("hidden");
        messageWin.classList.add("hidden");
    }
}
startButton.addEventListener("click", (e)=>{
    if (e.currentTarget.classList.contains("start")) {
        game.start();
        startButton.classList.replace("start", "restart");
        startButton.textContent = "Restart";
        messageStart.classList.add("hidden");
        stateReplacing(table);
    } else {
        game.restart();
        stateReplacing(table);
        startButton.classList.replace("restart", "start");
        startButton.textContent = "Start";
        messageLost.classList.add("hidden");
        messageWin.classList.add("hidden");
        messageStart.classList.remove("hidden");
    }
});
document.addEventListener("keydown", (e)=>{
    if (e.key.startsWith("Arrow")) e.preventDefault();
    makeMove(e.key);
});
let startX;
let startY;
document.addEventListener("touchstart", (e)=>{
    if (e.touches.length !== 1) {
        startX = undefined;
        startY = undefined;
        return;
    }
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
});
document.addEventListener("touchend", (e)=>{
    if (startX === undefined || startY === undefined) return;
    const endX = e.changedTouches[0].clientX;
    const endY = e.changedTouches[0].clientY;
    const direction = handleSwipe(startX, endX, startY, endY);
    startX = undefined;
    startY = undefined;
    if (direction) makeMove(direction);
});
document.addEventListener("touchcancel", ()=>{
    startX = undefined;
    startY = undefined;
});
function handleSwipe(startx, endX, starty, endY) {
    const diffX = endX - startx;
    const diffY = endY - starty;
    if (Math.abs(diffX) > Math.abs(diffY)) {
        if (Math.abs(diffX) < 30) return null;
        return diffX > 0 ? "right" : "left";
    }
    if (Math.abs(diffY) < 30) return null;
    return diffY > 0 ? "down" : "up";
}
function makeMove(direction) {
    if (game.getStatus() !== "playing") return;
    switch(direction){
        case "ArrowLeft":
        // falls through
        case "left":
            game.moveLeft();
            stateReplacing(table);
            hasWonOrLost();
            break;
        case "ArrowRight":
        // falls through
        case "right":
            game.moveRight();
            stateReplacing(table);
            hasWonOrLost();
            break;
        case "ArrowUp":
        // falls through
        case "up":
            game.moveUp();
            stateReplacing(table);
            hasWonOrLost();
            break;
        case "ArrowDown":
        // falls through
        case "down":
            game.moveDown();
            stateReplacing(table);
            hasWonOrLost();
            break;
    }
}

},{"789b00406e138236":"eIbh2"}],"eIbh2":[function(require,module,exports) {
"use strict";
/**
 * This class represents the game.
 * Now it has a basic structure, that is needed for testing.
 * Feel free to add more props and methods if needed.
 */ class Game {
    /**
   * Creates a new game instance.
   *
   * @param {number[][]} initialState
   * The initial state of the board.
   * @default
   * [[0, 0, 0, 0],
   *  [0, 0, 0, 0],
   *  [0, 0, 0, 0],
   *  [0, 0, 0, 0]]
   *
   * If passed, the board will be initialized with the provided
   * initial state.
   */ score = 0;
    status = "idle";
    emptyState;
    apearCells = [];
    unitedCells = [];
    constructor(initialState = [
        [
            0,
            0,
            0,
            0
        ],
        [
            0,
            0,
            0,
            0
        ],
        [
            0,
            0,
            0,
            0
        ],
        [
            0,
            0,
            0,
            0
        ]
    ]){
        this.state = initialState;
        this.emptyState = initialState.map((row)=>[
                ...row
            ]);
    }
    moveLeft() {
        const oldState = this.getState();
        for(let i = 0; i < this.state.length; i++){
            let fullPlates = this.state[i].filter((plate)=>plate > 0);
            for(let j = 1; j < fullPlates.length; j++)if (fullPlates[j] === fullPlates[j - 1]) {
                fullPlates[j - 1] = fullPlates[j] + fullPlates[j - 1];
                fullPlates[j] = 0;
                this.unitedCells.push([
                    i,
                    j - 1
                ]);
                this.score += fullPlates[j - 1];
                continue;
            }
            fullPlates = fullPlates.filter((plate)=>plate > 0);
            this.state[i] = [
                ...fullPlates
            ];
            for(let y = 0; y < 4 - fullPlates.length; y++)this.state[i].push(0);
        }
        if (this.hasChanged(oldState)) this.apearCells.push(this.spawnTile());
        const winning = this.hasWon();
        if (!winning) {
            const continiuPlaying = this.hasAvailableMoves();
            if (!continiuPlaying) this.status = "lost";
        }
    }
    moveRight() {
        const oldState = this.getState();
        for(let i = 0; i < this.state.length; i++){
            let fullPlates = [
                ...this.state[i]
            ].reverse().filter((plate)=>plate > 0);
            for(let j = 1; j < fullPlates.length; j++)if (fullPlates[j] === fullPlates[j - 1]) {
                fullPlates[j - 1] = fullPlates[j] + fullPlates[j - 1];
                fullPlates[j] = 0;
                const compactIndex = fullPlates.slice(0, j).filter((plate)=>plate > 0).length - 1;
                this.unitedCells.push([
                    i,
                    3 - compactIndex
                ]);
                this.score += fullPlates[j - 1];
                continue;
            }
            fullPlates = fullPlates.filter((plate)=>plate > 0);
            this.state[i] = [
                ...fullPlates
            ];
            for(let y = 0; y < 4 - fullPlates.length; y++)this.state[i].push(0);
            this.state[i].reverse();
        }
        if (this.hasChanged(oldState)) this.apearCells.push(this.spawnTile());
        const winning = this.hasWon();
        if (!winning) {
            const continiuPlaying = this.hasAvailableMoves();
            if (!continiuPlaying) this.status = "lost";
        }
    }
    moveUp() {
        const oldState = this.getState();
        for(let i = 0; i < this.state.length; i++){
            const column = this.state.map((row)=>row[i]);
            let fullPlates = column.filter((plate)=>plate > 0);
            for(let j = 1; j < fullPlates.length; j++)if (fullPlates[j] === fullPlates[j - 1]) {
                fullPlates[j - 1] += fullPlates[j];
                fullPlates[j] = 0;
                this.unitedCells.push([
                    j - 1,
                    i
                ]);
                this.score += fullPlates[j - 1];
                j++;
            }
            fullPlates = fullPlates.filter((plate)=>plate > 0);
            while(fullPlates.length < 4)fullPlates.push(0);
            for(let j = 0; j < this.state.length; j++)this.state[j][i] = fullPlates[j];
        }
        if (this.hasChanged(oldState)) this.apearCells.push(this.spawnTile());
        const winning = this.hasWon();
        if (!winning) {
            const continiuPlaying = this.hasAvailableMoves();
            if (!continiuPlaying) this.status = "lost";
        }
    }
    moveDown() {
        const oldState = this.getState();
        for(let i = 0; i < this.state.length; i++){
            const column = [
                ...this.state
            ].reverse().map((row)=>row[i]);
            let fullPlates = column.filter((plate)=>plate > 0);
            for(let j = 1; j < fullPlates.length; j++)if (fullPlates[j] === fullPlates[j - 1]) {
                fullPlates[j - 1] += fullPlates[j];
                fullPlates[j] = 0;
                const compactIndex = fullPlates.slice(0, j).filter((plate)=>plate > 0).length - 1;
                this.unitedCells.push([
                    3 - compactIndex,
                    i
                ]);
                this.score += fullPlates[j - 1];
                j++;
            }
            fullPlates = fullPlates.filter((plate)=>plate > 0);
            while(fullPlates.length < 4)fullPlates.push(0);
            fullPlates.reverse();
            for(let j = 0; j < this.state.length; j++)this.state[j][i] = fullPlates[j];
        }
        if (this.hasChanged(oldState)) this.apearCells.push(this.spawnTile());
        const winning = this.hasWon();
        if (!winning) {
            const continiuPlaying = this.hasAvailableMoves();
            if (!continiuPlaying) this.status = "lost";
        }
    }
    getScore() {
        return this.score;
    }
    getState() {
        return this.state.map((row)=>[
                ...row
            ]);
    }
    getStatus() {
        return this.status;
    }
    start() {
        if (this.status === "idle") {
            this.status = "playing";
            const coord1 = this.spawnTile();
            const coord2 = this.spawnTile();
            if (coord1) this.apearCells.push(coord1);
            if (coord2) this.apearCells.push(coord2);
        }
    }
    restart() {
        this.apearCells.length = 0;
        this.status = "idle";
        this.score = 0;
        this.state = this.emptyState.map((row)=>[
                ...row
            ]);
    }
    // Add your own methods here
    getEmptyCells() {
        const coords = [];
        for(let i = 0; i < this.state.length; i++){
            for(let j = 0; j < this.state[i].length; j++)if (this.state[i][j] === 0) coords.push([
                i,
                j
            ]);
        }
        return coords;
    }
    getRandomEmptyCell() {
        const emptyStates = this.getEmptyCells();
        const index = Math.floor(Math.random() * emptyStates.length);
        return emptyStates[index];
    }
    spawnTile() {
        const coordinate = this.getRandomEmptyCell();
        if (!coordinate) return;
        if (Math.random() < 0.9) this.state[coordinate[0]][coordinate[1]] = 2;
        else this.state[coordinate[0]][coordinate[1]] = 4;
        return [
            ...coordinate
        ];
    }
    getAnimatedCoords() {
        return [
            ...this.apearCells
        ];
    }
    getUnitedCoords() {
        return [
            ...this.unitedCells
        ];
    }
    hasChanged(oldState) {
        for(let i = 0; i < this.state.length; i++){
            const ifHasChanged = this.state[i].some((plate, index)=>oldState[i][index] !== plate);
            if (ifHasChanged) return true;
        }
        return false;
    }
    hasWon() {
        const currentState = this.getState();
        for (const row of currentState){
            for (const plate of row)if (plate === 2048) {
                this.status = "won";
                return true;
            }
        }
        return false;
    }
    hasAvailableMoves() {
        const currentState = this.getState();
        // проверка на горизонтальные обьединения и пустые ячейки
        for(let i = 0; i < currentState.length; i++)for(let j = 0; j < currentState[i].length; j++){
            if (currentState[i][j] === 0) return true;
            if (j === currentState[i].length - 1) break;
            if (currentState[i][j] === currentState[i][j + 1]) return true;
        }
        // проверка на вертикальные обьединения и пустые ячейки
        for(let i = 0; i < currentState.length; i++){
            const column = currentState.map((row)=>row[i]);
            for(let j = 0; j < column.length; j++){
                if (column[j] === 0) return true;
                if (j === column.length - 1) break;
                if (column[j] === column[j + 1]) return true;
            }
        }
        return false;
    }
}
module.exports = Game;

},{}]},["8bDoD","3cYfC"], "3cYfC", "parcelRequire7b01")

//# sourceMappingURL=index.b8fca702.js.map

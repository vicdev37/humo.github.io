// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
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
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"../node_modules/normalize.css/normalize.css":[function(require,module,exports) {

        var reloadCSS = require('_css_loader');
        module.hot.dispose(reloadCSS);
        module.hot.accept(reloadCSS);
      
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"../src/styles/styles.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"normalize.css":"../node_modules/normalize.css/normalize.css","./../fonts/DINPro-Black.eot":[["DINPro-Black.50fdd424.eot","../src/fonts/DINPro-Black.eot"],"../src/fonts/DINPro-Black.eot"],"./../fonts/DINPro-Black.woff2":[["DINPro-Black.326a3f60.woff2","../src/fonts/DINPro-Black.woff2"],"../src/fonts/DINPro-Black.woff2"],"./../fonts/DINPro-Black.woff":[["DINPro-Black.b7d1a54c.woff","../src/fonts/DINPro-Black.woff"],"../src/fonts/DINPro-Black.woff"],"./../fonts/DINPro-Black.ttf":[["DINPro-Black.8f16052a.ttf","../src/fonts/DINPro-Black.ttf"],"../src/fonts/DINPro-Black.ttf"],"./../fonts/DINPro-Black.svg":[["DINPro-Black.5d3923a2.svg","../src/fonts/DINPro-Black.svg"],"../src/fonts/DINPro-Black.svg"],"./../fonts/DINPro-CondensedRegular.eot":[["DINPro-CondensedRegular.63c46bd1.eot","../src/fonts/DINPro-CondensedRegular.eot"],"../src/fonts/DINPro-CondensedRegular.eot"],"./../fonts/DINPro-CondensedRegular.woff2":[["DINPro-CondensedRegular.a09e3b0b.woff2","../src/fonts/DINPro-CondensedRegular.woff2"],"../src/fonts/DINPro-CondensedRegular.woff2"],"./../fonts/DINPro-CondensedRegular.woff":[["DINPro-CondensedRegular.7b275bfa.woff","../src/fonts/DINPro-CondensedRegular.woff"],"../src/fonts/DINPro-CondensedRegular.woff"],"./../fonts/DINPro-CondensedRegular.ttf":[["DINPro-CondensedRegular.e29ed5b3.ttf","../src/fonts/DINPro-CondensedRegular.ttf"],"../src/fonts/DINPro-CondensedRegular.ttf"],"./../fonts/DINPro-CondensedRegular.svg":[["DINPro-CondensedRegular.34e35ae9.svg","../src/fonts/DINPro-CondensedRegular.svg"],"../src/fonts/DINPro-CondensedRegular.svg"],"./../fonts/DINPro-Italic.eot":[["DINPro-Italic.37999f6c.eot","../src/fonts/DINPro-Italic.eot"],"../src/fonts/DINPro-Italic.eot"],"./../fonts/DINPro-Italic.woff":[["DINPro-Italic.5c5cbdd4.woff","../src/fonts/DINPro-Italic.woff"],"../src/fonts/DINPro-Italic.woff"],"./../fonts/DINPro-Italic.ttf":[["DINPro-Italic.c1b24f99.ttf","../src/fonts/DINPro-Italic.ttf"],"../src/fonts/DINPro-Italic.ttf"],"./../fonts/DINPro-CondensedItalic.eot":[["DINPro-CondensedItalic.9f720405.eot","../src/fonts/DINPro-CondensedItalic.eot"],"../src/fonts/DINPro-CondensedItalic.eot"],"./../fonts/DINPro-CondensedItalic.woff":[["DINPro-CondensedItalic.9e952d15.woff","../src/fonts/DINPro-CondensedItalic.woff"],"../src/fonts/DINPro-CondensedItalic.woff"],"./../fonts/DINPro-CondensedItalic.ttf":[["DINPro-CondensedItalic.d7dd7b28.ttf","../src/fonts/DINPro-CondensedItalic.ttf"],"../src/fonts/DINPro-CondensedItalic.ttf"],"./../fonts/GothamPro.eot":[["GothamPro.bba096af.eot","../src/fonts/GothamPro.eot"],"../src/fonts/GothamPro.eot"],"./../fonts/GothamPro.woff2":[["GothamPro.2d444813.woff2","../src/fonts/GothamPro.woff2"],"../src/fonts/GothamPro.woff2"],"./../fonts/GothamPro.woff":[["GothamPro.d70ef31a.woff","../src/fonts/GothamPro.woff"],"../src/fonts/GothamPro.woff"],"./../fonts/GothamPro.ttf":[["GothamPro.b1d710b5.ttf","../src/fonts/GothamPro.ttf"],"../src/fonts/GothamPro.ttf"],"./../images/header-bg.png":[["header-bg.72cd8de1.png","../src/images/header-bg.png"],"../src/images/header-bg.png"],"./../images/ticket-logo.svg":[["ticket-logo.6d578b80.svg","../src/images/ticket-logo.svg"],"../src/images/ticket-logo.svg"],"./../images/lock.svg":[["lock.f3bd61b9.svg","../src/images/lock.svg"],"../src/images/lock.svg"],"./../images/login.svg":[["login.bb1b4809.svg","../src/images/login.svg"],"../src/images/login.svg"],"./../images/news-1.jpg":[["news-1.0babd932.jpg","../src/images/news-1.jpg"],"../src/images/news-1.jpg"],"./../images/news-2.jpg":[["news-2.725be953.jpg","../src/images/news-2.jpg"],"../src/images/news-2.jpg"],"./../images/news-3.jpg":[["news-3.ff6ae5d1.jpg","../src/images/news-3.jpg"],"../src/images/news-3.jpg"],"./../images/news-4.jpg":[["news-4.349c97d3.jpg","../src/images/news-4.jpg"],"../src/images/news-4.jpg"],"./../images/arrow-left.svg":[["arrow-left.da60f44f.svg","../src/images/arrow-left.svg"],"../src/images/arrow-left.svg"],"./../images/arrow-right.svg":[["arrow-right.59ef1682.svg","../src/images/arrow-right.svg"],"../src/images/arrow-right.svg"],"./../images/lock-orange.svg":[["lock-orange.8b080f06.svg","../src/images/lock-orange.svg"],"../src/images/lock-orange.svg"],"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "62444" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js"], null)
//# sourceMappingURL=/styles.7ed26b92.js.map
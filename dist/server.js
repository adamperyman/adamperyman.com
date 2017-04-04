/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 21);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var TOP_NAV_LINKS = exports.TOP_NAV_LINKS = {
  home: '/',
  login: '/login'
};

var HTML = exports.HTML = {
  MAIN_TITLE: 'AP\'s House of Dev'
};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(TOP_NAV_LINKS, 'TOP_NAV_LINKS', '/home/adam/dev/adamperyman.com/src/constants.js');

  __REACT_HOT_LOADER__.register(HTML, 'HTML', '/home/adam/dev/adamperyman.com/src/constants.js');
}();

;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("webpack");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(15);

var _reactRouter = __webpack_require__(16);

var _express = __webpack_require__(12);

var _express2 = _interopRequireDefault(_express);

var _webpack = __webpack_require__(3);

var _webpack2 = _interopRequireDefault(_webpack);

var _webpackDevMiddleware = __webpack_require__(17);

var _webpackDevMiddleware2 = _interopRequireDefault(_webpackDevMiddleware);

var _webpackHotMiddleware = __webpack_require__(18);

var _webpackHotMiddleware2 = _interopRequireDefault(_webpackHotMiddleware);

var _routes = __webpack_require__(8);

var _routes2 = _interopRequireDefault(_routes);

var _template = __webpack_require__(9);

var _template2 = _interopRequireDefault(_template);

var _webpackConfig = __webpack_require__(11);

var _webpackConfig2 = _interopRequireDefault(_webpackConfig);

var _logger = __webpack_require__(10);

var _constants = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var PORT = process.env.PORT || 3000;
var isProduction = process.env.NODE_ENV === 'production';

var compiler = (0, _webpack2.default)(_webpackConfig2.default);

if (!isProduction) {
  app.use((0, _webpackDevMiddleware2.default)(compiler, {
    noInfo: true,
    publicPath: '/'
  }));

  app.use((0, _webpackHotMiddleware2.default)(compiler));
}

app.use('*', function (req, res) {
  var context = {};
  var html = (0, _server.renderToString)(_react2.default.createElement(
    _reactRouter.StaticRouter,
    { location: req.url, context: context },
    _react2.default.createElement(_routes2.default, null)
  ));

  res.send((0, _template2.default)({
    title: _constants.HTML.MAIN_TITLE,
    body: html
  }));
});

app.use(function (req, res) {
  res.sendStatus(500);
});

app.listen(PORT, function () {
  _logger.logger.info('Now listening at http://localhost:' + PORT);
});

process.on('uncaughtException', function (error) {
  _logger.logger.error('Uncaught Exception: ', error);
});

process.on('unhandledRejection', function (error) {
  _logger.logger.error('Unhandled Rejection: ', error);
});
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(app, 'app', '/home/adam/dev/adamperyman.com/src/server/index.js');

  __REACT_HOT_LOADER__.register(PORT, 'PORT', '/home/adam/dev/adamperyman.com/src/server/index.js');

  __REACT_HOT_LOADER__.register(isProduction, 'isProduction', '/home/adam/dev/adamperyman.com/src/server/index.js');

  __REACT_HOT_LOADER__.register(compiler, 'compiler', '/home/adam/dev/adamperyman.com/src/server/index.js');
}();

;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function _default() {
  return _react2.default.createElement(
    'div',
    { className: 'home-page' },
    _react2.default.createElement(
      'span',
      null,
      'home page'
    )
  );
};

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', '/home/adam/dev/adamperyman.com/src/client/components/home-page/index.js');
}();

;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function _default() {
  return _react2.default.createElement(
    'div',
    { className: 'login-page' },
    _react2.default.createElement('input', { className: 'username', type: 'text' }),
    _react2.default.createElement('input', { className: 'password', type: 'password' })
  );
};

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', '/home/adam/dev/adamperyman.com/src/client/components/login-page/index.js');
}();

;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(2);

var _constants = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TOP_NAV_LINKS_KEYS = Object.keys(_constants.TOP_NAV_LINKS);

var _default = function _default() {
  return _react2.default.createElement(
    'div',
    { className: 'top-nav' },
    TOP_NAV_LINKS_KEYS.map(function (link) {
      return _react2.default.createElement(
        'div',
        { className: 'top-nav-' + link, key: link },
        _react2.default.createElement(
          _reactRouterDom.Link,
          { to: '' + _constants.TOP_NAV_LINKS[link] },
          _react2.default.createElement(
            'p',
            null,
            link
          )
        )
      );
    })
  );
};

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(TOP_NAV_LINKS_KEYS, 'TOP_NAV_LINKS_KEYS', '/home/adam/dev/adamperyman.com/src/client/components/top-nav/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/home/adam/dev/adamperyman.com/src/client/components/top-nav/index.js');
}();

;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(2);

var _homePage = __webpack_require__(5);

var _homePage2 = _interopRequireDefault(_homePage);

var _loginPage = __webpack_require__(6);

var _loginPage2 = _interopRequireDefault(_loginPage);

var _topNav = __webpack_require__(7);

var _topNav2 = _interopRequireDefault(_topNav);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function _default() {
  return _react2.default.createElement(
    'div',
    { className: 'app-wrapper' },
    _react2.default.createElement(_topNav2.default, null),
    _react2.default.createElement(
      _reactRouterDom.Switch,
      null,
      _react2.default.createElement(_reactRouterDom.Route, { path: '/', component: _homePage2.default }),
      _react2.default.createElement(_reactRouterDom.Route, { path: '/login', component: _loginPage2.default })
    )
  );
};

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', '/home/adam/dev/adamperyman.com/src/routes.js');
}();

;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _default = function _default(_ref) {
  var title = _ref.title,
      body = _ref.body;

  return "\n    <!DOCTYPE html>\n    <html>\n      <head>\n        <title>" + title + "</title>\n        <link rel='stylesheet' href='dist/styles.css' />\n      </head>\n\n      <body>\n        <div id='main'>" + body + "</div>\n        <script src='dist/bundle.js' />\n      </body>\n    </html>\n  ";
};

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, "default", "/home/adam/dev/adamperyman.com/src/server/template.js");
}();

;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logger = undefined;

var _winston = __webpack_require__(20);

var _winston2 = _interopRequireDefault(_winston);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = exports.logger = new _winston2.default.Logger({
  transports: [new _winston2.default.transports.Console({
    level: process.env.NODE_ENV === 'production' ? 'info' : 'debug',
    colorize: true,
    timestamp: true,
    prettyPrint: true,
    label: 'ap-dev-server'
  })]
});

logger.stream = {
  write: function write(message) {
    return logger.info(message);
  }
};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(logger, 'logger', '/home/adam/dev/adamperyman.com/src/utils/logger.js');
}();

;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

var webpack = __webpack_require__(3);
var path = __webpack_require__(14);
var nodeExternals = __webpack_require__(19);
var ExtractTextPlugin = __webpack_require__(13);

var isProduction = process.env.NODE_ENV === 'production';

var clientUniversalPlugins = [new ExtractTextPlugin({
  filename: 'styles.css',
  disable: !isProduction
})];

var clientProdPlugins = [];

var clientDevPlugins = [new webpack.HotModuleReplacementPlugin(), new webpack.NoEmitOnErrorsPlugin()];

module.exports = [{
  name: 'server',
  entry: [path.join(__dirname, 'src', 'server', 'index.js')],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'server.js',
    publicPath: '/'
  },
  target: 'node',
  externals: nodeExternals(),
  module: {
    rules: [{
      test: /\.js$/,
      use: [{
        loader: 'babel-loader'
      }]
    }]
  }
}, {
  name: 'client',
  entry: ['react-hot-loader/patch', 'webpack-hot-middleware/client', path.join(__dirname, 'src', 'client', 'index.js'), path.join(__dirname, 'src', 'client', 'styles', 'index.scss')],
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: 'app.js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }, {
      test: /\.scss$/,
      exclude: /node_modules/,
      use: ExtractTextPlugin.extract({
        use: ['style-loader', 'css-loader', 'sass-loader'],
        fallback: 'style-loader'
      })
    }]
  },
  plugins: isProduction ? clientUniversalPlugins.concat(clientProdPlugins) : clientUniversalPlugins.concat(clientDevPlugins)
}];
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(isProduction, 'isProduction', '/home/adam/dev/adamperyman.com/webpack.config.js');

  __REACT_HOT_LOADER__.register(clientUniversalPlugins, 'clientUniversalPlugins', '/home/adam/dev/adamperyman.com/webpack.config.js');

  __REACT_HOT_LOADER__.register(clientProdPlugins, 'clientProdPlugins', '/home/adam/dev/adamperyman.com/webpack.config.js');

  __REACT_HOT_LOADER__.register(clientDevPlugins, 'clientDevPlugins', '/home/adam/dev/adamperyman.com/webpack.config.js');
}();

;
/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("extract-text-webpack-plugin");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("webpack-dev-middleware");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("webpack-hot-middleware");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("webpack-node-externals");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("winston");

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(4);


/***/ })
/******/ ]);
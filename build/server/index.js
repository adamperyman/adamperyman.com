"use strict";var _express = _interopRequireDefault(require("express"));
var _path = _interopRequireDefault(require("path"));

var _logger = _interopRequireDefault(require("./logger"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var app = (0, _express.default)();

app.use(_express.default.static(_path.default.join('..', 'client')));

var PORT = process.env.PORT || 80;

app.get('/', function (req, res) {
  res.send('Hello, world!');
});

app.listen(PORT, function () {
  _logger.default.info('listening on port: ' + PORT);
});;var _temp = function () {if (typeof __REACT_HOT_LOADER__ === 'undefined') {return;}__REACT_HOT_LOADER__.register(app, "app", "src/server/index.js");__REACT_HOT_LOADER__.register(PORT, "PORT", "src/server/index.js");}();;
//# sourceMappingURL=index.js.map
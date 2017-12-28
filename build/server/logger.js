"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _path = _interopRequireDefault(require("path"));
var _os = require("os");
var _winston = require("winston");function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var isProduction = process.env.NODE_ENV === 'production';

var MAX_LOG_FILE_SIZE = 10 * 1024 * 1024;
var MAX_LOG_FILES = 10;

var LOG_FILE_NAME = '.application.log';

var LOG_FILE_PATH = isProduction ?
_path.default.join((0, _os.homedir)(), LOG_FILE_NAME) :
_path.default.join(__dirname, '..', '..', LOG_FILE_NAME);

var LOG_LEVEL = process.env.LOG_LEVEL || (isProduction ? 'verbose' : 'debug');

var logger = new _winston.Logger({
  transports: [
  new _winston.transports.Console({
    level: LOG_LEVEL,
    colorize: true,
    timestamp: true,
    prettyPrint: true }),

  new _winston.transports.File({
    level: LOG_LEVEL,
    filename: LOG_FILE_PATH,
    handleExceptions: true,
    humanReadableUnhandledException: true,
    prettyPrint: true,
    maxSize: MAX_LOG_FILE_SIZE,
    maxFiles: MAX_LOG_FILES,
    json: false })] });




logger.expressMiddleware = function (req, res, next) {
  if (req.url.includes('__webpack') && !isProduction) {
    return next();
  }

  var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  var defaultMessage = "".concat(ip, " - ").concat(req.method, " ").concat(req.url);

  var startTimeStamp = Date.now();
  var waitTimePrintInterval = 5000;

  var waitingTime = 0;

  var intervalId = setInterval(function () {
    waitingTime += waitTimePrintInterval;

    logger.verbose("".concat(defaultMessage, " - wait for ").concat(waitingTime / 1000, "s.."));
  }, waitTimePrintInterval);

  var printExecutionTime = function printExecutionTime() {var statusCode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var message = "".concat(defaultMessage, " - ").concat(statusCode, " - ").concat((Date.now() - startTimeStamp) / 1000, "s");

    if (res.statusCode < 400) {
      logger.info(message);
    } else {
      logger.warn(message);
    }

    clearInterval(intervalId);
  };

  req.on('end', function () {return printExecutionTime(res.statusCode);});
  req.on('close', function () {return printExecutionTime('[closed by user]');});

  return next();
};

logger.info("Log File: ".concat(LOG_FILE_PATH, "."));var _default =

logger;var _default2 = _default;exports.default = _default2;;var _temp = function () {if (typeof __REACT_HOT_LOADER__ === 'undefined') {return;}__REACT_HOT_LOADER__.register(isProduction, "isProduction", "src/server/logger.js");__REACT_HOT_LOADER__.register(MAX_LOG_FILE_SIZE, "MAX_LOG_FILE_SIZE", "src/server/logger.js");__REACT_HOT_LOADER__.register(MAX_LOG_FILES, "MAX_LOG_FILES", "src/server/logger.js");__REACT_HOT_LOADER__.register(LOG_FILE_NAME, "LOG_FILE_NAME", "src/server/logger.js");__REACT_HOT_LOADER__.register(LOG_FILE_PATH, "LOG_FILE_PATH", "src/server/logger.js");__REACT_HOT_LOADER__.register(LOG_LEVEL, "LOG_LEVEL", "src/server/logger.js");__REACT_HOT_LOADER__.register(logger, "logger", "src/server/logger.js");__REACT_HOT_LOADER__.register(_default, "default", "src/server/logger.js");}();;
//# sourceMappingURL=logger.js.map
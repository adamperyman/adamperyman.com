import path from 'path'
import { homedir } from 'os'
import { Logger, transports } from 'winston'

const isProduction = process.env.NODE_ENV === 'production'

const MAX_LOG_FILE_SIZE = 10 * 1024 * 1024
const MAX_LOG_FILES = 10

const LOG_FILE_NAME = '.application.log'

const LOG_FILE_PATH = isProduction
  ? path.join(homedir(), LOG_FILE_NAME)
  : path.join(__dirname, '..', '..', LOG_FILE_NAME)

const LOG_LEVEL = process.env.LOG_LEVEL || (isProduction ? 'verbose' : 'debug')

const logger = new Logger({
  transports: [
    new transports.Console({
      level: LOG_LEVEL,
      colorize: true,
      timestamp: true,
      prettyPrint: true
    }),
    new transports.File({
      level: LOG_LEVEL,
      filename: LOG_FILE_PATH,
      handleExceptions: true,
      humanReadableUnhandledException: true,
      prettyPrint: true,
      maxSize: MAX_LOG_FILE_SIZE,
      maxFiles: MAX_LOG_FILES,
      json: false
    })
  ]
})

const { createLogger, format, transports } = require('winston')
const { json, splat, prettyPrint } = format

const logger = createLogger({
  format: format.combine(
    splat(),
    prettyPrint(),
    json()
  ),
  transports: [
    new transports.Console()
  ]
})

module.exports = (loggerName) => {
  return childLogger = logger.child({ logger_name: loggerName })
}

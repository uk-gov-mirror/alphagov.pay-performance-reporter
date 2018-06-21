const F = require('./functions')

const PERFORMANCE_PLATFORM_API_KEY = process.env.PERFORMANCE_PLATFORM_API_KEY

if (!PERFORMANCE_PLATFORM_API_KEY) {
  console.error('PERFORMANCE_PLATFORM_API_KEY not found')
  process.exit(1)
}

const CONNECTOR_URL = process.env.CONNECTOR_URL

if (!CONNECTOR_URL) {
  console.error('CONNECTOR_URL not found')
  process.exit(1)
}

const today = new Date()

F
  .retrieveDailyPerformanceStatsForDate(CONNECTOR_URL, today)
  .then(report => F.sendStatsToPerformancePlatform(today, report, PERFORMANCE_PLATFORM_API_KEY))
  .then(() => {
    console.info('Successful run, exiting 0')
    process.exit(0)
  })
  .catch(err => {
    console.error(`Unhandled exception: ${err}`)
    process.exit(1)
  })

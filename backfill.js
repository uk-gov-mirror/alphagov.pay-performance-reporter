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

const lastYearOfDates = Array
  .from(new Array(1000).keys())
  .filter(daysAgo => daysAgo >= 30 && daysAgo <= 60)
  .map(daysAgo => {
    let today = new Date()
    today.setDate(today.getDate() - daysAgo)
    return today
  })

Promise.all(
  lastYearOfDates
  .map(date => {
    return F
      .retrieveDailyPerformanceStatsForDate(CONNECTOR_URL, date)
      .then(report => {
        return {date, report}
      })
  })
).then(datedReports => {
  return Promise.all(datedReports.map(datedReport => {
    console.info(datedReport.date, datedReport.report)
    return F
      .sendStatsToPerformancePlatform(
      datedReport.date,
      datedReport.report,
      PERFORMANCE_PLATFORM_API_KEY
    )
  }))
})
.then(results => process.exit(0))

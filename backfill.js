const F = require('./functions')

const { PERFORMANCE_PLATFORM_API_KEY, CONNECTOR_URL, DAYS_TO_BACKFILL } = process.env

if (!PERFORMANCE_PLATFORM_API_KEY) {
  console.error('PERFORMANCE_PLATFORM_API_KEY not found')
  process.exit(1)
}

if (!CONNECTOR_URL) {
  console.error('CONNECTOR_URL not found')
  process.exit(1)
}

const dateRange = Array
  .from(new Array(DAYS_TO_BACKFILL + 1).keys())
  .filter(daysAgo => daysAgo > 0)
  .map(daysAgo => {
    let today = new Date()
    today.setDate(today.getDate() - daysAgo)
    return today
  })

Promise.all(
  dateRange
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
}).then(results => process.exit(0))

const request = require('request')

module.exports = {}

function generateId (timestamp, service, period, dataType) {
  const formattedId = `${timestamp}.${service}.${period}.${dataType}`
  const encodedId   = Buffer.from(formattedId).toString('base64')
  return encodedId
}

function createPayload (timestamp, totalVolume, totalAmount, averageAmount) {
  const service   = 'govuk-pay'
  const period    = 'day'

  return [
    {
      _id: generateId(timestamp, service, period, 'transaction'),
      type: 'transaction',
      period: period,
      service: service,
      _timestamp: timestamp,
      count: parseInt(totalVolume, 10)
    },
    {
      _id: generateId(timestamp, service, period, 'value'),
      type: 'value',
      period: period,
      service: service,
      _timestamp: timestamp,
      count: parseInt(totalAmount / 100, 10)
    },
    {
      _id: generateId(timestamp, service, period, 'average-value'),
      type: 'average-value',
      period: period,
      service: service,
      _timestamp: timestamp,
      count: parseInt(averageAmount / 100, 10)
  }]
}

function formatDate (date) {
  let d = new Date(date.getTime()) // clone date

  d.setUTCHours(0)
  d.setUTCMinutes(0)
  d.setUTCSeconds(0)
  d.setUTCMilliseconds(0)

  return d.toISOString()
}

module.exports.retrieveDailyPerformanceStatsForDate = async function(connectorUrl, date) {
  const endpoint = 'v1/api/reports/daily-performance-report'
  const reportUrl = `${connectorUrl}/${endpoint}?date=${date.toISOString()}`

  return new Promise((resolve, reject) => {
    request.get(reportUrl, (err, response, body) => {
      if (err) {
        reject(err)
      } else if (response && response.statusCode !== 200) {
        reject(`Got an unsuccessful response. Status code: ${response.statusCode}`)
      } else {
        resolve(JSON.parse(body))
      }
    })
  })
}

module.exports.sendStatsToPerformancePlatform = function (date, report, apiKey) {
  const url = 'https://www.performance.service.gov.uk/data/govuk-pay/payments'

  const timestamp = formatDate(date)

  const headers = {
    'Authorization': `Bearer ${apiKey}`,
    'Accept':        'application/json',
    'Content-Type': 'application/json'
  }

  const payload = createPayload(
    timestamp,
    report.total_volume,
    report.total_amount,
    report.average_amount
  )

  console.log(payload)

  return new Promise((resolve, reject) => {
    request({
      uri: url,
      method: 'POST',
      json: payload,
      headers: headers,
    }, (err, response, body) => {
      if (err) {
        reject(err)
      } else if (response && response.statusCode !== 200) {
        reject(`Got an unsuccessful response. Status code: ${response.statusCode}, message: ${response.body.messages}`)
      } else {
        resolve([response, body])
      }
    })
  })
}

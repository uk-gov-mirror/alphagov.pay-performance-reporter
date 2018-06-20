function generateId(timestamp, service, period, dataType) {
  const formattedId = `${timestamp}.${service}.${period}.${dataType}`
  const encodedId   = Buffer.from(formattedId).toString('base64')
  return encodedId
}
const request = require('request')
const PERFORMANCE_PLATFORM_API_KEY = process.env.PERFORMANCE_PLATFORM_API_KEY
// const PERFORMANCE_PLATFORM_URL     = 'https://www.performance.service.gov.uk/data/govuk-pay/payments'
const PERFORMANCE_PLATFORM_URL     = 'http://localhost:8000'

if (!PERFORMANCE_PLATFORM_API_KEY) {
  console.error('PERFORMANCE_PLATFORM_API_KEY not found')
  process.exit(1)
}

const CONNECTOR_URL        = process.env.CONNECTOR_URL
const CONNECTOR_ENDPOINT   = 'v1/api/reports/performance-report'
const CONNECTOR_REPORT_URL = `${CONNECTOR_URL}/${CONNECTOR_ENDPOINT}`

console.info(`CONNECTOR_REPORT_URL => ${CONNECTOR_REPORT_URL}`)
console.info('Making request to connector')

request.get(CONNECTOR_REPORT_URL, (err, response, body) => {
  if (err) {
    console.error(`Found err after request to connector, will exit: ${err}`)
    process.exit(1)
  }

  const parsedBody    = JSON.parse(body)
  const totalVolume   = parsedBody.total_amount;
  const totalAmount   = parsedBody.total_volume;
  const averageAmount = parsedBody.average_amount;

  console.info(`Found totalVolume   => ${totalVolume}`)
  console.info(`Found totalAmount   => ${totalAmount}`)
  console.info(`Found averageAmount => ${averageAmount}`)

  let timestamp = new Date()
  timestamp.setUTCHours(0)
  timestamp.setUTCMinutes(0)
  timestamp.setUTCSeconds(0)
  timestamp.setUTCMilliseconds(0)
  timestamp = timestamp.toISOString()

  const service   = 'govuk-pay'
  const period    = 'day'

  const payload = [
    {
      _id: generateId(timestamp, service, period, 'transaction'),
      type: 'transaction',
      period: period,
      service: service,
      _timestamp: timestamp,
      count: parseInt(totalVolume)
    },
    {
      _id: generateId(timestamp, service, period, 'value'),
      type: 'value',
      period: period,
      service: service,
      _timestamp: timestamp,
      count: parseInt(totalAmount, 10)
    },
    {
      _id: generateId(timestamp, service, period, 'average-value'),
      type: 'average-value',
      period: period,
      service: service,
      _timestamp: timestamp,
      count: parseInt(averageAmount)
  }]

  const headers = {
    Authorization:  `Bearer ${PERFORMANCE_PLATFORM_API_KEY}`,
    Accept:         'application/json',
    'Content-Type': 'application/json'
  }

  request({
    uri:    PERFORMANCE_PLATFORM_URL,
    method: 'POST',
    json: payload,
  }, (err, response, body) => {
    console.info('cb')
    console.info(err, response, body)
  })

  console.info(payload, headers)
  //process.exit(0);
})

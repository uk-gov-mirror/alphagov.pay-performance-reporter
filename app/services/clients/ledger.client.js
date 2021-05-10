'use strict'

const baseClient = require('./base.client/base.client')
const { LEDGER_URL } = require('../../config/services')

const defaultOptions = {
  baseUrl: LEDGER_URL,
  json: true,
  service: 'ledger'
}

const getPerformanceReport = function getPerformanceReport (fromDate, toDate) {
  const path = '/v1/report/performance-report'
  const configuration = Object.assign({
    url: path,
    qs: {
      from_date: fromDate,
      to_date: toDate
    },
    description: 'Transactions summary statistics'
  }, defaultOptions)

  return  baseClient.get(configuration)
}

module.exports = {
  getPerformanceReport: getPerformanceReport
}

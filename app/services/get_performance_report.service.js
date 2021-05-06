'use strict'

const ledgerClient = require('./clients/ledger.client')

async function getPerformanceReport(fromDate, toDate) {
  return  await ledgerClient.getPerformanceReport(fromDate, toDate)
}

module.exports = {
  getPerformanceReport: getPerformanceReport
}

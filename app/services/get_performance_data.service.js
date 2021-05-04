'use strict'

const ledgerClient = require('./clients/ledger.client')
const moment = require('moment')

async function getPerformanceReport(fromDate, toDate) {
  return  await ledgerClient.getTransactionsSummary(fromDate, toDate)
}

module.exports = {
  getPerformanceReport: getPerformanceReport
}

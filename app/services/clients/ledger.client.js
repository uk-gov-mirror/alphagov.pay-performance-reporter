'use strict'

const baseClient = require('./base-client/base.client')

const defaultOptions = {
  baseUrl: process.env.LEDGER_URL,
  json: true,
  service: 'ledger'
}

const extractData = (response) => response.data

const transactionsSummary = function transactionsSummary (fromDate, toDate, options = {}) {
  const path = '/v1/report/transactions-summary'
  const configuration = Object.assign({
    url: path,
    qs: {
      from_date: fromDate,
      to_date: toDate
    },
    description: 'Transactions summary statistics'
  }, defaultOptions, options)

  return baseClient.get(configuration)
    .then(response => extractData(response))
}

module.exports = {
  transactionsSummary
}

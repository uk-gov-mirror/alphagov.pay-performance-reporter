'use strict'

const baseClient = require('./base.client/base.client')

const defaultOptions = {
  baseUrl: process.env.LEDGER_URL,
  json: true,
  service: 'ledger'
}

const getTransactionsSummary = function getTransactionsSummary (fromDate, toDate) {
  const path = '/v1/report/transactions-summary'
  const configuration = Object.assign({
    url: path,
    qs: {
      override_account_id_restriction: true,
      from_date: fromDate,
      to_date: toDate
    },
    description: 'Transactions summary statistics'
  }, defaultOptions)

  return  baseClient.get(configuration)
}

module.exports = {
  getTransactionsSummary: getTransactionsSummary
}

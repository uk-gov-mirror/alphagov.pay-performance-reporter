'use strict'

const nock = require('nock')
const chai = require('chai')

const { expect } = chai

const performanceDataService = require('../../app/services/get_performance_data.service')
const fixtures = require('../fixtures/services.fixture')

const ledgerMock = nock(process.env.LEDGER_URL)

describe('get performance data', () => {
  afterEach(done => {
    nock.cleanAll()
    done()
  })

  it('should return performance data from ledger', async function () {
    const fromDate =  '2021-04-27T00:00:00Z'
    const toDate = '2021-05-04T00:00:00Z'
    const url = '/v1/report/transactions-summary?override_account_id_restriction=true&from_date=' + fromDate + '&to_date=' + toDate

    ledgerMock.get(url)
      .reply(200, fixtures.performanceData())

    const data = await performanceDataService.getPerformanceReport(fromDate, toDate)

    expect(data.payments.count).to.equal(49493)
    expect(data.payments.gross_amount).to.equal(262310)
    expect(data.net_income).to.equal(260210)
  })
})

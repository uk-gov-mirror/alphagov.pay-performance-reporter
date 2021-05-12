'use strict'

const nock = require('nock')
const chai = require('chai')

const { expect } = chai

const performanceDataService = require('../../app/services/get_performance_report.service')
const fixtures = require('../fixtures/services.fixture')

const ledgerMock = nock(process.env.LEDGER_URL)

describe('get performance data', () => {
  afterEach(done => {
    nock.cleanAll()
    done()
  })

  it('should return performance data from ledger', async function () {
    const fromDate =  '2021-04-27'
    const toDate = '2021-05-04'
    const url = '/v1/report/performance-report?from_date=' + fromDate + '&to_date=' + toDate + '&state=SUCCESS'

    ledgerMock.get(url)
      .reply(200, fixtures.statisticsData())

    const data = await performanceDataService.getPerformanceReport(fromDate, toDate)

    expect(data.total_volume).to.equal(4949300)
    expect(data.total_amount).to.equal(262317000000)
    expect(data.average_amount).to.equal(5100)
  })
})

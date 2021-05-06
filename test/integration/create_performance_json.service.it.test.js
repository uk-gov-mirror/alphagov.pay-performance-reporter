'use strict'

const nock = require('nock')
const chai = require('chai')
const moment = require('moment')

const { expect } = chai

const createJsonService = require('../../app/services/create_performance_json.service')
const fixtures = require('../fixtures/services.fixture')

const adminusersMock = nock(process.env.ADMINUSERS_URL)
const ledgerMock = nock(process.env.LEDGER_URL)

describe('create performance json', () => {
  afterEach(done => {
    nock.cleanAll()
    done()
  })

  const fromDate =moment('20160901', 'YYYYMMDD').format('yyyy-MM-DD')
  const toDate = moment().utc().subtract(1, 'days').format('yyyy-MM-DD')
  const servicesData = fixtures.services()
  const statisticsData = fixtures.statisticsData()

  it('should create performance json', async function () {
    const statisticsUrl = '/v1/report/performance-report?from_date=' + fromDate + '&to_date=' + toDate

    adminusersMock.get('/v1/api/services/list')
      .reply(200, servicesData)
    ledgerMock.get(statisticsUrl)
      .reply(200, statisticsData)

    const performanceJson = await createJsonService.createPerformanceJson()

    expect(performanceJson).to.deep.equal(fixtures.performanceData())
  })
})
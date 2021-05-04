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

  const fromDate = moment.utc().subtract(7, 'days').startOf('day').format()
  const toDate = moment().utc().startOf('day').format()
  const servicesData = fixtures.services()
  const statisticsData = fixtures.statisticsData()

  it('should create performance json', async function () {
    const statisticsUrl = '/v1/report/transactions-summary?override_account_id_restriction=true&from_date=' + fromDate + '&to_date=' + toDate

    adminusersMock.get('/v1/api/services/list')
      .reply(200, servicesData)
    ledgerMock.get(statisticsUrl)
      .reply(200, statisticsData)

    const performanceJson = await createJsonService.createPerformanceJson()

    expect(performanceJson).to.deep.equal(fixtures.performanceData())
  })
})
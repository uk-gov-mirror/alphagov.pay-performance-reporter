'use strict'

const nock = require('nock')
const chai = require('chai')

const { expect } = chai

const filterService = require('../../app/services/get_filtered_services.service')
const fixtures = require('../fixtures/services.fixture')

const adminusersMock = nock(process.env.ADMINUSERS_URL)

describe('get service data', () => {
  afterEach(done => {
    nock.cleanAll()
    done()
  })

  const servicesData = fixtures.services()
  it('should convert, filter and sort service data to Service array', async function () {
    adminusersMock.get('/v1/api/services/list')
      .reply(200, servicesData)
      const services = await filterService.fetchAndFilterServices()
      expect(services.length).to.equal(4)
  })
})
'use strict'

const baseClient = require('./base.client/base.client')
const Service = require('../../models/Service.class')
const { ADMINUSERS_URL } = require('../../config/services')

const defaultOptions = {
  baseUrl: ADMINUSERS_URL,
  json: true,
  service: 'adminusers'
}

const responseBodyToServicesArray = body => body.map(service => new Service(service))

const getServiceStatistics = async function getServiceStatistics () {
  let data
  const path = '/v1/api/services/list'
  const configuration = Object.assign({
    url: path,
    description: 'Service statistics',
    transform: responseBodyToServicesArray
  }, defaultOptions)

  return baseClient.get(configuration)
}

module.exports = {
  getServiceStatistics: getServiceStatistics
}

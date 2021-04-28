'use strict'

const baseClient = require('./base.client/base.client')

const defaultOptions = {
  baseUrl: process.env.ADMINUSERS_URL,
  json: true,
  service: 'adminusers'
}

const extractData = (response) => response.data

const getServiceStatistics = function getServiceStatistics () {
  const path = '/v1/api/services/list'
  const configuration = Object.assign({
    url: path,
    description: 'Service statistics'
  }, defaultOptions)
  return baseClient.get(configuration)
    .then(response => extractData(response))
}

module.exports = {
  getServiceStatistics: getServiceStatistics
}

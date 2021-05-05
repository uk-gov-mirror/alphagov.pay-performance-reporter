'use strict'

const adminUsersClient = require('./clients/adminusers.client')

async function fetchAndFilterServices() {
  const servicesData = await adminUsersClient.getServiceStatistics()

  return servicesData
    .filter(service => service.currentGoLiveStage === 'LIVE' && service.internal === false && service.archived === false)
    .sort((serviceA, serviceB) => serviceA.merchantDetails.name.localeCompare(serviceB.merchantDetails.name))
}

module.exports = {
  fetchAndFilterServices: fetchAndFilterServices
}

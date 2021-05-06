'use strict'

const moment = require('moment')
const lodash = require('lodash')

const filteredServices = require('./get_filtered_services.service')
const performanceDataService = require('./get_performance_report.service')

async function createPerformanceJson() {
  const fromDate = moment.utc().subtract(7, 'days').startOf('day').format()
  const toDate = moment().utc().startOf('day').format()

  const services = await filteredServices.fetchAndFilterServices()
  const performanceReport = await performanceDataService.getPerformanceReport(fromDate, toDate)

  const countBySector = {}
  const countByOrganisation = {}

  services.forEach(service => {
    if (service.sector) {
      const sector = service.sector
      lodash.set(countBySector, sector, countBySector[sector] + 1 || 1)
    }
    const name = service.merchantDetails.name
    lodash.set(countByOrganisation, name, countByOrganisation[name] + 1 || 1)
  })

  return  {
    dateUpdated: moment().format('D MMMM YYYY'),
    numberOfPayments: (performanceReport.total_volume / 1000000).toFixed(1) + ' million',
    totalPaymentAmount: (performanceReport.total_amount / 1000000).toFixed(1) + ' million',
    numberOfServices: services.length,
    numberOfOrganisations: Object.keys(countByOrganisation).length,
    serviceCountBySector: countBySector,
    serviceCountByOrganisation: countByOrganisation
  }
}

module.exports = {
  createPerformanceJson
}

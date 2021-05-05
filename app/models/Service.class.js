'use strict'

class Service {
  constructor (serviceData) {
    this.name = serviceData.name
    this.currentGoLiveStage = serviceData.current_go_live_stage
    this.internal = serviceData.internal
    this.archived = serviceData.archived
    this.sector = serviceData.sector
    this.merchantDetails = serviceData.merchant_details
  }
}

module.exports = Service

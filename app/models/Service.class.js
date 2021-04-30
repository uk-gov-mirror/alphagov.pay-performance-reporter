'use strict'

class Service {
  constructor (serviceData) {
    this.name = serviceData.name
    this.serviceName = serviceData.service_name
    this.currentGoLiveStage = serviceData.current_go_live_stage
    this.internal = serviceData.internal
    this.archived = serviceData.archived
  }
}

module.exports = Service

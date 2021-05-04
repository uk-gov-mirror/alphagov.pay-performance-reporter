'use strict'

module.exports = {
  services: () => {
    return [
      {
        name: 'service1',
        service_name: 'Gservice',
        current_go_live_stage: 'LIVE',
        live: true,
        internal: false,
        archived: true
      },
      {
        name: 'service2',
        service_name: 'Fservice',
        current_go_live_stage: 'NOT_STARTED',
        live: false,
        internal: false,
        archived: false
      },
      {
        name: 'service3',
        service_name: 'Eservice',
        current_go_live_stage: 'AGREED_STRIPE',
        live: false,
        internal: false,
        archived: false
      },
      {
        name: 'service4',
        service_name: 'Dservice',
        current_go_live_stage: 'LIVE',
        live: true,
        internal: false,
        archived: false
      },
      {
        name: 'service5',
        service_name: 'Cservice',
        current_go_live_stage: 'LIVE',
        live: true,
        internal: false,
        archived: false
      },
      {
        name: 'service6',
        service_name: 'Bservice',
        current_go_live_stage: 'LIVE',
        live: true,
        internal: false,
        archived: false
      },
      {
        name: 'service7',
        service_name: 'Aservice',
        current_go_live_stage: 'LIVE',
        live: true,
        internal: false,
        archived: false
      }
    ]
  },
  performanceData: () => {
    return {
      payments: {
        count: 49493,
        gross_amount: 262310
      },
      net_income: 260210
    }
  }
}

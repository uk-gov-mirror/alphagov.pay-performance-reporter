'use strict'

const moment = require('moment')

module.exports = {
  services: () => {
    return [
      {
        name: 'service1',
        merchant_details: {
          name: "Great Service"
        },
        current_go_live_stage: 'LIVE',
        live: true,
        internal: false,
        archived: true,
        sector: 'nhstrust'
      },
      {
        name: 'service2',
        merchant_details: {
          name: "Functional Service"
        },
        current_go_live_stage: 'NOT_STARTED',
        live: false,
        internal: false,
        archived: false,
        sector: 'police'
      },
      {
        name: 'service3',
        merchant_details: {
          name: "Excellent Service"
        },
        current_go_live_stage: 'AGREED_STRIPE',
        live: false,
        internal: false,
        archived: false,
        sector: 'local'
      },
      {
        name: 'service4',
        merchant_details: {
          name: "Delightful Service"
        },
        current_go_live_stage: 'LIVE',
        live: true,
        internal: false,
        archived: false,
        sector: 'central'
      },
      {
        name: 'service5',
        merchant_details: {
          name: "Current Service"
        },
        current_go_live_stage: 'LIVE',
        live: true,
        internal: false,
        archived: false,
        sector: 'central'
      },
      {
        name: 'service6',
        current_go_live_stage: 'LIVE',
        merchant_details: {
          name: "Bold Service"
        },
        live: true,
        internal: false,
        archived: false,
        sector: 'other'
      },
      {
        name: 'service7',
        merchant_details: {
          name: "AAA Service"
        },
        current_go_live_stage: 'LIVE',
        live: true,
        internal: false,
        archived: false,
        sector: 'nhscentral'
      },
      {
        name: 'service7',
        merchant_details: {
          name: "Bold Service"
        },
        current_go_live_stage: 'LIVE',
        live: true,
        internal: false,
        archived: false,
        sector: 'other'
      }
    ]
  },
  statisticsData: () => {
    return {
      payments: {
        count: 4949300,
        gross_amount: 2623170000
      },
      net_income: 26021000000
    }
  },
  performanceData: () => {
    return  {
      dateUpdated: moment().format('D MMMM YYYY'),
      numberOfPayments: "4.9 million",
      totalPaymentAmount:"2623.2 million",
      numberOfServices:5,
      numberOfOrganisations:4,
      serviceCountBySector: {
        nhscentral:1,
        other:2,
        central:2
      },
      serviceCountByOrganisation: {
        'AAA Service': 1,
        'Bold Service': 2,
        'Current Service': 1,
        'Delightful Service': 1
      }
    }
  }
}

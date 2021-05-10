'use strict'

const Joi = require('joi')

const expectedServiceUrlValues = Joi.object({
  ADMINUSERS_URL: Joi.string().required(),
  LEDGER_URL: Joi.string().required()
})

const { error, value: validatedServiceUrlValues } = expectedServiceUrlValues.validate(
  process.env,
  { allowUnknown: true, stripUnknown: true }
)

if (error) {
  throw new Error(`Invalid service url environment variables set ${error.message}`)
}

module.exports = validatedServiceUrlValues

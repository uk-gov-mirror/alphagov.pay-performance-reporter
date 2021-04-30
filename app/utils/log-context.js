'use strict'

const { AsyncLocalStorage } = require('async_hooks')

const asyncLocalStorage = new AsyncLocalStorage()

function logContextMiddleware (req, res, next) {
  asyncLocalStorage.run({}, () => {
    asyncLocalStorage.getStore()
    next()
  })
}

function getLoggingFields () {
  return asyncLocalStorage.getStore()
}

module.exports = {
  logContextMiddleware,
  getLoggingFields
}

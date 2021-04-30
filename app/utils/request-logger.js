'use strict'

module.exports = {
  logRequestStart: context => {
    console.log(`Calling ${context.service} to ${context.description}`, context)
  },

  logRequestEnd: (context, response) => {
    let duration = new Date() - context.startTime
    console.log(`${context.method} to ${context.url} ended - elapsed time: ${duration} ms`, context)
  },

  logRequestFailure: (context, response) => {
    console.log(`Calling ${context.service} to ${context.description} failed`, context, response.statusCode)
  },

  logRequestError: (context, error) => {
    console.log(`Calling ${context.service} to ${context.description} threw exception`, context, error)
  }
}

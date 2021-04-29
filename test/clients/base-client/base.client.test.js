'use strict'

const http = require('http')
const { expect } = require('chai')
const proxyquire = require('proxyquire')

describe('baseClient', () => {
  const requestRetryStub = {
    defaults: function () {
      return function (options, callback) {
        callback(null, { statusCode: 200, request: options })
      }
    }
  }
  const baseClient = proxyquire('../../../app/services/clients/base.client/base.client',
    {
      'requestretry': requestRetryStub
    })

  describe('headers', () => {
    let request
    before(done => {
        baseClient.get({ url: 'http://example.com/' }, (err, response) => {
          request = response.request
          done(err)
        })
    })

    it(`should set outbound request's 'Content-Type' header to be 'application/json'`, () => {
      expect(request.headers).to.have.property('Content-Type').to.equal('application/json')
    })
  })
  describe('keepAlive', () => {
    let server
    let connections = []
    before(done => {
      server = http.createServer((req, res) => {
        res.writeHead(200)
        res.end()
      }).listen()
      baseClient
        .get({ url: `http://localhost:${server.address().port}/alpha` }, captureConnection)
        .then(() => baseClient.get({ url: `http://localhost:${server.address().port}/beta` }, captureConnection))
        .then(() => done())
        .catch(done)

      function captureConnection (ignoreableError, response) {
        connections.push(response.connection)
      }
    })
    after(() => {
      server.close()
    })

    it('should use the same connection for 2 requests to the same domain', () => {
      expect(connections.length).to.equal(2)
      expect(connections[0] === connections[1]).to.equal(true)
    })
  })
})

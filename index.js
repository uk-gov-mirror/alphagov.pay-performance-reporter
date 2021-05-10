'use strict'

const createPerformanceJsonService = require('./app/services/create_performance_json.service')
const uploadToS3Service = require('./app/services/upload_to_s3_bucket.service')
const logger = require('./app/utils/logger')(__filename)

async function run () {
  const report = await createPerformanceJsonService.createPerformanceJson()
  await uploadToS3Service.uploadToS3(JSON.stringify(report, null, 2))
}

run()
  .then(() => {
    logger.info('Finished running performance report')
    process.exit(0)
  })
  .catch(err => {
    logger.error('Failed running performance report', err)
    process.exit(1)
  })

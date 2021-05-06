'use strict'

const logger = require('../utils/logger')(__filename)
const { S3 } = require('aws-sdk')
const config = require('../config/aws')

const uploadToS3 = async function uploadToS3(content) {
  // The AWS SDK automatically uses the AWS credentials from the environment when deployed.
  // For local testing, it should go through aws vault 'aws-vault exec test -- npm run start:dev'
  try {
    const s3 = new S3()
    const key = 'performance.json'
    logger.info(`Uploading transactions file to S3 with key ${key}`)
    const response = await s3.putObject({
      Bucket: config.AWS_S3_PERFORMANCE_DATA_BUCKET_NAME,
      Body: content,
      Key: key,
      ServerSideEncryption: 'AES256'
    }).promise();
    logger.info('Upload to S3 completed', {
      fileVersionId: response.VersionId,
      fileExpiration: response.Expiration
    })
    return key
  } catch (err) {
    logger.error(`Error uploading to s3: ${err.message}`)
    throw new Error('There was an error uploading the file to S3')
  }
}

module.exports = {
  uploadToS3
}

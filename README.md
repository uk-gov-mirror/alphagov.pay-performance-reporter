# Pay performance reporter

A NodeJS app that queries Ledger and Adminusers to gather performance stats.

Previously this was run daily as an AWS ECS task, to upload stats to an s3 bucket.

## Required environment variables

- `ADMINUSERS_URL` - URL of adminusers you want to retrieve data from
- `LEDGER_URL` - URL of ledger you want to retrieve data from
- `AWS_S3_PERFORMANCE_DATA_BUCKET_NAME` - name of the bucket where you want to store the performance.json file

AWS credentials are picked up from the environment

## Running it locally

- make sure that you have a `.env` file in the root directory (you can rename `.env.example`)
- make sure that `ADMINUSERS_URL` and `LEDGER_URL` point to a running instance
- make sure that `AWS_S3_PERFORMANCE_DATA_BUCKET_NAME` is a valid bucket name
- `aws-vault exec test -- npm run start:dev`
  
## Licence
[MIT License](LICENCE)

## Vulnerability Disclosure

GOV.UK Pay aims to stay secure for everyone. If you are a security researcher and have discovered a security vulnerability in this code, we appreciate your help in disclosing it to us in a responsible manner. Please refer to our [vulnerability disclosure policy](https://www.gov.uk/help/report-vulnerability) and our [security.txt](https://vdp.cabinetoffice.gov.uk/.well-known/security.txt) file for details.

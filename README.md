# Pay performance reporter

We have an AWS ECS task that runs daily to upload stats to an s3 bucket where it is read from by the performance report page

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

## Responsible Disclosure
GOV.UK Pay aims to stay secure for everyone. If you are a security researcher and have discovered a security vulnerability in this code, we appreciate your help in disclosing it to us in a responsible manner. We will give appropriate credit to those reporting confirmed issues. Please e-mail gds-team-pay-security@digital.cabinet-office.gov.uk with details of any issue you find, we aim to reply quickly.


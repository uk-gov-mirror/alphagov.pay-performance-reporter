# Pay performance reporter

We have an AWS ECS task that runs daily to send stats to the [GOV.UK Performance platform](https://www.gov.uk/performance/govuk-pay).

We also have the ability to run it to backfill data for specific days.


## Required environment variables

- PERFORMANCE_PLATFORM_API_KEY - GOV.UK Performance platform [API key](https://performance-platform.readthedocs.io/)
- CONNECTOR_URL - URL of connector you want to retrieve data from

## Optional environment variable

- DAYS_TO_BACKFILL 
  > If there is missing data that needs backfilling you can provide
  the number of days you need to backfill, so if it was just yesterday
  do `DAYS_TO_BACKFILL=1` and if it was last week do `DAYS_TO_BACKFILL=7`

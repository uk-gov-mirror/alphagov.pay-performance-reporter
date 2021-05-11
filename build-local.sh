#!/bin/bash

set -e

cd "$(dirname "$0")"

npm install
docker build -t govukpay/performance-reporter:local .

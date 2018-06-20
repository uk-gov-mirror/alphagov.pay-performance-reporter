FROM govukpay/nodejs:8.11.3
WORKDIR /app
ADD . /app
RUN npm install
CMD 'tail -f /dev/null'

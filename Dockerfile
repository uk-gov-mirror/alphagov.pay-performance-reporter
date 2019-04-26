FROM govukpay/nodejs:alpine-3.8.1
WORKDIR /app
ADD . /app
RUN npm install
CMD ["node" "index.js"]

FROM node:16.14.0-alpine3.15@sha256:2c6c59cf4d34d4f937ddfcf33bab9d8bbad8658d1b9de7b97622566a52167f2b

WORKDIR /app
ADD . /app
RUN ["npm", "install"]
CMD ["node", "index.js"]

FROM node@sha256:4522cc108ad7c055b71f545596bfc07632d9f9a41125ea12eabe8f04114807f3


WORKDIR /app
ADD . /app
RUN ["npm", "install"]
CMD ["node" "index.js"]

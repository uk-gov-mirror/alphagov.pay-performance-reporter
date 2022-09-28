FROM node@sha256:566ffe130bb0fd2d03d492333ad2e9c35fcf1f2c9d8be6311b3c29d6c138802a


WORKDIR /app
ADD . /app
RUN ["npm", "install"]
CMD ["node" "index.js"]

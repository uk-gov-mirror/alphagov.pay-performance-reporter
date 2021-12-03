FROM node@sha256:e64dc950217610c86f29aef803b123e1b6a4a372d6fa4bcf71f9ddcbd39eba5c


WORKDIR /app
ADD . /app
RUN ["npm", "install"]
CMD ["node" "index.js"]

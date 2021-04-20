FROM node@sha256:3ca0132180509b9fd68545b2232dd9fc01726c06fc36b772389d41b82d81a8de


WORKDIR /app
ADD . /app
RUN ["npm", "install"]
CMD ["node" "index.js"]

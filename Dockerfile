FROM node@sha256:2d7a22f6d738af0dc829d181e8a95d6239460a185f2dafee531b3c79b6c9334c


WORKDIR /app
ADD . /app
RUN ["npm", "install"]
CMD ["node" "index.js"]

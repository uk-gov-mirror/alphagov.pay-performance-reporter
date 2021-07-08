FROM node@sha256:b7e2d75ecd585feed57be69cd3dee973e5c498241e64906899b3baa2169fb35a


WORKDIR /app
ADD . /app
RUN ["npm", "install"]
CMD ["node" "index.js"]

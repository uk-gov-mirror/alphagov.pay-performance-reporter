FROM node@sha256:6f8ae702a7609f6f18d81ac72998e5d6f5d0ace9a13b866318c76340c6d986b2


WORKDIR /app
ADD . /app
RUN ["npm", "install"]
CMD ["node" "index.js"]

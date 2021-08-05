FROM node:12.22.4-alpine3.14@sha256:869f9f9ded6c8a6f2c314422dc29b18be56988c805859027c042bee464f74f32

WORKDIR /app
ADD . /app
RUN ["npm", "install"]
CMD ["node", "index.js"]

FROM node:12.22.1-alpine3.12@sha256:d2b86793468052dbab261117791413a68a0bba807ec91abf2078ec252563f935

WORKDIR /app
ADD . /app
RUN ["npm", "install"]
CMD ["node", "index.js"]

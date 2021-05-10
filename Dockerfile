FROM node:12.22.1-alpine3.12@sha256:29c7b0f61218ec57a2ac36778a3954e3f8b32f43294aaf960d2fbb3452229335

WORKDIR /app
ADD . /app
RUN ["npm", "install"]
CMD ["node", "index.js"]

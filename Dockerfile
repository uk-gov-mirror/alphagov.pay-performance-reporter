FROM node@sha256:3da1c08529fef7007d57d2133a0feb0fa8c60fdd4ad6691978f9dfcb0365b430


WORKDIR /app
ADD . /app
RUN ["npm", "install"]
CMD ["node" "index.js"]

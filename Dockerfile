FROM node@sha256:9ff001f1d05ef0e03e9459ee3bb7f807f1c836d322bea406caf37adfb095698d


WORKDIR /app
ADD . /app
RUN ["npm", "install"]
CMD ["node" "index.js"]

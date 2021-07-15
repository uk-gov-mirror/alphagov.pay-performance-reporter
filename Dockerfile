FROM node@sha256:50b33102c307e04f73817dad87cdae145b14782875495ddd950b5a48e4937c70


WORKDIR /app
ADD . /app
RUN ["npm", "install"]
CMD ["node" "index.js"]

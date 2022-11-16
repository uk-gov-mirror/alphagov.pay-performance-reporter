FROM node@sha256:c59fb39150e4a7ae14dfd42d3f9874398c7941784b73049c2d274115f00d36c8


WORKDIR /app
ADD . /app
RUN ["npm", "install"]
CMD ["node" "index.js"]

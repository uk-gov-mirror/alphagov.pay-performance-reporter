FROM node@sha256:f372a9ffcec27159dc9623bad29997a1b61eafbb145dbf4f7a64568be2f59b99


WORKDIR /app
ADD . /app
RUN ["npm", "install"]
CMD ["node" "index.js"]

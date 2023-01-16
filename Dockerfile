FROM node@sha256:ab3603cb7934b21f1ffb522b1a1d538809516c6e4cd73b144716bc1830aad1a6


WORKDIR /app
ADD . /app
RUN ["npm", "install"]
CMD ["node" "index.js"]

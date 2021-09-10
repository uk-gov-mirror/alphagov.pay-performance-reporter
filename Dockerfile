FROM node@sha256:697313d55634a94b36cc5cf75a687b210c7e4a8e433e64d80893bcfca9b11de8


WORKDIR /app
ADD . /app
RUN ["npm", "install"]
CMD ["node" "index.js"]

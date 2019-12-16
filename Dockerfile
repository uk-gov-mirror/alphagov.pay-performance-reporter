FROM node@sha256:b556d8910b851c27c5c8922eeb55d94fe6dbaf878d24bf0c9a8c32ba21cd091a


WORKDIR /app
ADD . /app
RUN ["npm", "install"]
CMD ["node" "index.js"]

FROM node@sha256:6d5ecd68b7d28e63fbec26ae4d05fa679a7003325d8e4ea72e6dc318d9869899


WORKDIR /app
ADD . /app
RUN ["npm", "install"]
CMD ["node" "index.js"]

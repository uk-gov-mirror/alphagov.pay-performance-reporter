FROM node@sha256:aea4be182415998853c47176eba665e862bed067ee6986632c20764782dcdf96


WORKDIR /app
ADD . /app
RUN ["npm", "install"]
CMD ["node" "index.js"]

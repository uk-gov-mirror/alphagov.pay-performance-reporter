FROM node@sha256:8704247878fe10eddfcb5c26540112b15e50d21ce8e5c7a7f6caf5cf857de219


WORKDIR /app
ADD . /app
RUN ["npm", "install"]
CMD ["node" "index.js"]

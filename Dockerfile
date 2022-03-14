FROM node@sha256:8c62619815dd2d7642f9e9c7f30d7016249a41175dfca0aaf248171960e4cc80


WORKDIR /app
ADD . /app
RUN ["npm", "install"]
CMD ["node" "index.js"]

FROM node@sha256:4faa7d0ec8b49051ddf8336fa4bca7eb42a16855e29ea4a6fe3204482a0bc220


WORKDIR /app
ADD . /app
RUN ["npm", "install"]
CMD ["node" "index.js"]

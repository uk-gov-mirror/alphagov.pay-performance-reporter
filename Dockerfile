FROM node@sha256:00c5c0850a48bbbf0136f1c886bad52784f9816a8d314a99307d734598359ed4


WORKDIR /app
ADD . /app
RUN ["npm", "install"]
CMD ["node" "index.js"]

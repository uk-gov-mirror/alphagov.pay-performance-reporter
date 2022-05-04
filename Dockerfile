FROM node@sha256:f4d6916c5625853e81994b5cb53ad3eb27e5fec9451c579d298fee0c508fe621


WORKDIR /app
ADD . /app
RUN ["npm", "install"]
CMD ["node" "index.js"]

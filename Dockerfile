FROM node@sha256:1ee1478ef46a53fc0584729999a0570cf2fb174fbfe0370edbf09680b2378b56


WORKDIR /app
ADD . /app
RUN ["npm", "install"]
CMD ["node" "index.js"]

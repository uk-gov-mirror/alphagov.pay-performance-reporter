FROM node@sha256:7ef8e673a9ea7b1dfaae292bf8faf549bb81ba60f68087454cef143698bdf2c4


WORKDIR /app
ADD . /app
RUN ["npm", "install"]
CMD ["node" "index.js"]

FROM node@sha256:0ab1ce23a4a5975b47f98204328604ff761d6f9aaf8f7b4506b31a042333e6d7


WORKDIR /app
ADD . /app
RUN ["npm", "install"]
CMD ["node" "index.js"]

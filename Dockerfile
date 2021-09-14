FROM node@sha256:a2b99f95311def1095e5b9604a81956f4109d9a512a44c86fc382f472cad1d91


WORKDIR /app
ADD . /app
RUN ["npm", "install"]
CMD ["node" "index.js"]

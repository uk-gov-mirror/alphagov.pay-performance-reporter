FROM node@sha256:417b3856d2e5d06385123f3924c36f5735fb1f690289ca69f2ac9c35fd06c009


WORKDIR /app
ADD . /app
RUN ["npm", "install"]
CMD ["node" "index.js"]

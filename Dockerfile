FROM node@sha256:250e9a093b861c330be2f4d1d224712d4e49290eeffc287ad190b120c1fe9d9f


WORKDIR /app
ADD . /app
RUN ["npm", "install"]
CMD ["node" "index.js"]

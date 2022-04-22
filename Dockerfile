FROM node@sha256:469ee26d9e00547ea91202a34ff2542f984c2c60a2edbb4007558ccb76b56df2


WORKDIR /app
ADD . /app
RUN ["npm", "install"]
CMD ["node" "index.js"]

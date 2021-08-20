FROM node@sha256:597864180891b2498e104ace823507882aa9ae132115af63dd8fc611bb300984


WORKDIR /app
ADD . /app
RUN ["npm", "install"]
CMD ["node" "index.js"]

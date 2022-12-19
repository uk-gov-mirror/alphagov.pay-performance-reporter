FROM node@sha256:3ed634e0f15d3e05a1918c3949963508f7ed56350cf94156e6d804ae577849fa


WORKDIR /app
ADD . /app
RUN ["npm", "install"]
CMD ["node" "index.js"]

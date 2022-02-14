FROM node@sha256:0e83c810225bc29e614189acf3d6419e3c09881cefb9f7a170fdcfe3e15bbfd5


WORKDIR /app
ADD . /app
RUN ["npm", "install"]
CMD ["node" "index.js"]

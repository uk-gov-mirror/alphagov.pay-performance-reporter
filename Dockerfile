FROM node@sha256:53ebfa5e6df1e458b47f677cb4f6fd3cf1d079083647dc40d182910a57b5a63d


WORKDIR /app
ADD . /app
RUN ["npm", "install"]
CMD ["node" "index.js"]

FROM node@sha256:48e43334c84762aa05c18dac37ec5ca396e9d55c5cb053f15cd4edbfe89a0914


WORKDIR /app
ADD . /app
RUN ["npm", "install"]
CMD ["node" "index.js"]

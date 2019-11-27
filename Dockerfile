# # Dockerfile
# # 1st Stage
# FROM node:10.15.1 AS builder
# RUN mkdir -p /usr/src/app
# WORKDIR /usr/src/app
# COPY package.json .
# COPY yarn.lock .
# RUN yarn install --ignore-platform
# COPY . .
# RUN yarn build

# # 2nd Stage
# FROM nginx:1.14.2-alpine
# COPY --from=0 /usr/src/app/build /usr/share/nginx/html
# WORKDIR /usr/share/nginx/html
# CMD ["nginx", "-g", "daemon off;"]




# => Build container
FROM node:alpine as builder
WORKDIR /app
COPY package.json .
COPY yarn.lock .
RUN yarn
COPY . .
RUN yarn build

# => Run container
FROM nginx:1.15.2-alpine

# Nginx config
# RUN rm -rf /etc/nginx/conf.d
# COPY conf /etc/nginx

# Static build
COPY --from=builder /app/build /usr/share/nginx/html/

# Default port exposure
EXPOSE 80

# Copy .env file and shell script to container
WORKDIR /usr/share/nginx/html
COPY ./env.sh .
COPY .env .

# Add bash
RUN apk add --no-cache bash

# Make our shell script executable
RUN chmod +x env.sh

# Start Nginx server
CMD ["/bin/bash", "-c", "/usr/share/nginx/html/env.sh && nginx -g \"daemon off;\""]
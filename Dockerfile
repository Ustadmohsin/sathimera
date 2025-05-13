# 1) Build stage
FROM node:20-alpine AS builder
WORKDIR /app

# copy package manifests and install deps
COPY package.json package-lock.json ./
RUN npm ci

# copy all source and produce a build
COPY . .
RUN npm run build

# 2) Production stage
FROM nginx:stable-alpine

# Remove default nginx static assets (optional, but keeps things clean)
RUN rm -rf /usr/share/nginx/html/*

# Copy only the build output
COPY --from=builder /app/build /usr/share/nginx/html

# (Optional) If you have a custom nginx.conf, copy it in here:
# COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

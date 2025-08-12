# # Stage 1: Build the app
# FROM node:18 AS builder
# WORKDIR /app

# # Install dependencies
# COPY package*.json ./
# RUN npm ci

# # Copy the rest of the code
# COPY . .

# # Build for production
# RUN npm run build

# # Stage 2: Serve with Nginx
# FROM nginx:alpine

# # Copy build output
# COPY --from=builder /app/dist /usr/share/nginx/html

# # Copy custom Nginx config (optional)
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# # Expose port 80
# EXPOSE 80

# # Keep Nginx running
# CMD ["nginx", "-g", "daemon off;"]

# Stage 1: Build the app
FROM node:18 AS builder
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm ci

# Copy source code
COPY . .

# Build the app for production
RUN npm run build

# Stage 2: Serve with Nginx
FROM nginx:alpine

# Remove default config and add our own
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy build output
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port
EXPOSE 80

# Keep Nginx running
CMD ["nginx", "-g", "daemon off;"]

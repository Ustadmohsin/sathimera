FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install 
COPY . .
RUN npm run builder
EXPOSE 3000
CMD ["npm", "run", "dev"]
# Dockerfile

# Base image
FROM node:18 AS base
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

# Development stage
FROM base AS dev
ENV NODE_ENV=development
EXPOSE 3000
CMD ["npm", "run", "dev"]

## Production stage (optional)
#FROM base AS prod
#ENV NODE_ENV=production
#RUN npm run build
#EXPOSE 3000
#CMD ["npm", "start"]

# Stage 1: Build the Angular application
FROM node:18 as build

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the Angular app's source code into the container
COPY . .

# Build the Angular app for production
RUN npm run build --prod

# Stage 2: Serve the Angular app with Nginx
FROM nginx:1.23-alpine

# Copy the built Angular app to the Nginx HTML folder
COPY --from=build /app/dist/news-app/browser /usr/share/nginx/html

# Add a shell script for runtime configuration
COPY docker-entrypoint.d/entrypoint.sh /docker-entrypoint.d/entrypoint.sh

RUN chmod +x /docker-entrypoint.d/entrypoint.sh

EXPOSE 80

CMD ["/bin/sh", "-c", "/docker-entrypoint.d/entrypoint.sh && nginx -g 'daemon off;'"]
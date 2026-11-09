# Use the official Node.js image as the base
FROM node:20-alpine

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json first so dependencies are cached
COPY package*.json ./

# Install the app dependencies
RUN npm install --omit=dev

# Copy the rest of the application source code
COPY . .

# Expose port 3000
EXPOSE 3000

# Start the app
CMD ["npm", "start"]

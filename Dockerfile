# Use an official Node.js runtime as a parent image
FROM node:18.19.0

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy the rest of your app's source code from your host to your image filesystem.
COPY . .

# Install dependencies
RUN npm install

# Build the Next.js application
RUN npm run build

# Use a non-root user to run your application (good practice for security)
# RUN adduser -D gsuyash86
# USER gsuyash86
EXPOSE 3000
# Command to run the app
CMD ["npm", "start"]
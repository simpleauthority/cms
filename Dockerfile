FROM node:lts

# Clone and move into directory
RUN git clone https://github.com/simpleauthority/cms.git /app
WORKDIR /app

# Install dependencies
RUN npm install --arch=arm64 --platform=linuxmusl

# Set environment
ENV NODE_ENV production

# Build application
RUN npm build

# Expose the port
EXPOSE 1337

# Start the app
CMD ["npm", "start"]

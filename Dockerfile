FROM node:lts

# Clone and move into directory
RUN git clone https://github.com/simpleauthority/cms.git /app
WORKDIR /app

# Install dependencies
RUN yarn install

# Build application
RUN yarn build

# Expose the port
EXPOSE 1337

# Start the app
CMD ["yarn", "start"]

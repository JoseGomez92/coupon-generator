FROM node:14-alpine

COPY . /app
WORKDIR /app

# Create a non-root user to prevent vulnerability troubles
RUN adduser -D app-user \
    && chown -R app-user /app

# Change to the non-root user
USER app-user

RUN npm install && npm run build

ENTRYPOINT [ "npm", "start" ]
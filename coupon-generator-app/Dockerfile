# Stage 1
FROM node:14-alpine AS build

WORKDIR /app

COPY / ./
COPY package*.json ./

RUN npm install -g @angular/cli@12.2.11 && \
    npm install && \
    ng build --configuration production --output-path=/dist

COPY . .


# Stage 2
FROM nginx:1.21.3-alpine

COPY --from=build /dist /usr/share/nginx/html

CMD ["/bin/sh",  "-c",  "envsubst < /usr/share/nginx/html/assets/env.template.js > /usr/share/nginx/html/assets/env.js && exec nginx -g 'daemon off;'"]

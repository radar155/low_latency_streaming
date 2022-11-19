FROM node:18-alpine
RUN apk update && apk upgrade && apk add --no-cache bash
WORKDIR /app
COPY . .
RUN npm ci --production
CMD npm start
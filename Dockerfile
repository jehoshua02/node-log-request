FROM node:18.16.0-alpine
EXPOSE 3000
COPY . .
ENTRYPOINT npm start

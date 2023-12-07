FROM node:18.16.0-alpine
EXPOSE 3001
COPY . .
CMD ["npm", "start"]

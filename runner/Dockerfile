FROM node:22-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY runner.js ./

EXPOSE 8080

CMD ["node", "runner.js"]

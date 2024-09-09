FROM node:20-alpine3.20

EXPOSE 8080

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY package*.json .

RUN npm i --omit-dev

COPY --chown=node:node . .

CMD exec node index.js
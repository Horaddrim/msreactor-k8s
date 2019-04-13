FROM node:10.15

WORKDIR /app

COPY ./index.js /app/index.js

COPY ./package.json /app/package.json

RUN npm i

CMD ["node", "/app/index.js"]
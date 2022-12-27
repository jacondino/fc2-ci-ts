FROM node:19-alpine3.16

COPY package.json ./
COPY package-lock.json ./

COPY . ./

RUN npm install

ENTRYPOINT ["node", "."]
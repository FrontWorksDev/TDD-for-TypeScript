FROM node:lts-alpine

WORKDIR /usr/src/app

RUN apk update && apk add zsh
#RUN npm i -D @types/jest ts-jest
#RUN npm i -D eslint prettier
RUN npm i -g typescript ts-node-dev

#CMD ["ts-node-dev", "--respawn", "index.ts"]


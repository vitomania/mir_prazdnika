FROM node:20-alpine

WORKDIR /usr/src/react-web

COPY *.json .

RUN npm install

COPY . .
COPY ./public ./public
COPY ./src ./src
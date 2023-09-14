FROM node:alpine
RUN apk update
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app/
RUN npm run lint
CMD npx ts-node src/main.ts
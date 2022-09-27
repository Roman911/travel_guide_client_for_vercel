FROM node:18.4.0

RUN mkdir /app

WORKDIR /app

COPY package.json /app

RUN npm install --legacy-peer-deps

COPY . /app

RUN npm run build

CMD ["npm", "start"]`
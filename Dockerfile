FROM node:20.13.1

WORKDIR /src

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build
RUN npm install -g serve
EXPOSE 3000

CMD ["serve", "out"]
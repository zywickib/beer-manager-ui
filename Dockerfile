FROM node:12.2.0
WORKDIR /app

COPY . .
EXPOSE 4200

CMD npm start

FROM node:12.2.0
WORKDIR /app

COPY  nginx/default.conf /etc/nginx/conf.d/
COPY . .
EXPOSE 4200

CMD npm start

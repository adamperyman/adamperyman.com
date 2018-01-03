FROM node:8.9.1

MAINTAINER <Adam Peryman> adam.peryman@gmail.com

RUN mkdir -p /var/www/adamperyman.com

WORKDIR /var/www/adamperyman.com

COPY node_modules node_modules
COPY package.json package.json
COPY build build
COPY yarn.lock yarn.lock
COPY .babelrc .babelrc

RUN cd /var/www/adamperyman.com && npm rebuild --build-from-source

EXPOSE 8080

CMD [ "yarn", "run:prod" ]

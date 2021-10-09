FROM node:16

WORKDIR /opt/vpn-website

ADD . /opt/vpn-website/

RUN npm ci

RUN npm run build

EXPOSE 5000

CMD [ "npm", "run", "serve"]

FROM node:16.10.0
EXPOSE 3000
EXPOSE 5000

ENV workdir="/vpn-website"
WORKDIR $workdir

COPY ["./*.js", "./*.ts", "./*.json", "./*.yml", "$workdir/"]
COPY [".babelrc", ".browserslistrc", ".editorconfig", ".eslintignore", ".node-version", ".nvmrc", "$workdir/"]
COPY [".husky", "$workdir/.husky"]
COPY ["src", "$workdir/src"]

RUN npm ci
RUN npm run build

ENTRYPOINT [ "npm", "start"]

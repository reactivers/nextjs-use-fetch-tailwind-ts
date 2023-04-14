FROM cypress/included:10.9.0 as base
WORKDIR /usr/src/app
COPY . .

RUN npm i -g yarn
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile --network-timeout 100000
COPY . .
RUN npm run e2e:headless
RUN npm run export
RUN npm run sitemap

FROM nginx:alpine as prod
WORKDIR /usr/src/app
COPY --from=base /usr/src/app/out/ ./out

EXPOSE 80

COPY ./nginx.conf /etc/nginx/nginx.conf
CMD ["nginx", "-g", "daemon off;"]

FROM node:lts-alpine AS build

# Copy dependency specs
WORKDIR /opt/app
COPY package.json .
COPY yarn.lock .

# Build app
RUN yarn install
RUN yarn build


FROM node:lts-alpine AS runtime
LABEL maintainer="Jared Dantis <jareddantis@gmail.com>"

# Copy app
COPY --from=build /opt/app /opt/app
WORKDIR /opt/app

# Run app
ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000
EXPOSE 3000
ENTRYPOINT ["node", ".output/server/index.mjs"]

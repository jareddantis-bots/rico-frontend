# rico-frontend

![Screenshot](/.github/screenshot.png)

This is the dashboard for Rico, a Discord bot for exchanging notes and maintaining threads.
It's written in [Nuxt.js v3](https://nuxtjs.org/) and it uses [Pinia](https://pinia.vuejs.org/) for maintaining state.

Being a frontend, it's meant to be used in tandem with Rico's backend, powered by PostgreSQL. Therefore, when developing locally,
it is recommended that one use Docker Compose to run the backend and the frontend together. Details are on the main
[Rico](https://github.com/jareddantis-bots/rico) repository.

[![Docker Image CI](https://github.com/jareddantis-bots/rico-frontend/actions/workflows/build-and-push.yml/badge.svg)](https://github.com/jareddantis-bots/rico-frontend/actions/workflows/build-and-push.yml) ![Docker Pulls](https://img.shields.io/docker/pulls/jareddantis/rico-frontend)

## Local development

Install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install --shamefully-hoist
```

Make your changes, then start the development server on http://localhost:3000:

```bash
npm run dev
```

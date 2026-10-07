# 80s Weather Channel App

What it looks like:

<img src="https://github.com/clintonmedbery/weather-client/blob/main/media/classicScreen.png" width="600" />

What it is based on: 

<img src="https://github.com/clintonmedbery/weather-client/blob/main/media/original.jpg?raw=true" width="600" />

Modeled this app off of the Weather Channel vibe from the 80s. Hideous or nostalgic, you decide.

using...

- [Vite](https://vite.dev)
- React 19
- Tailwind CSS 4
- Vitest + Testing Library
- Open-Meteo + Zippopotam.us APIs

## Setup

Requires Node 24 (see `.nvmrc`).

No API keys needed. Forecasts come from [Open-Meteo](https://open-meteo.com) and zip code lookups from [Zippopotam.us](https://zippopotam.us), both free and called directly from the browser.

### Install and run

```
yarn install
yarn dev
```

Then open [http://localhost:3000](http://localhost:3000).

### Or with Docker

```
docker compose -f docker/docker-compose.yml up
```

## Available Scripts

- `yarn dev` (or `yarn start`): run the dev server with hot reload
- `yarn build`: production build to the `build` folder
- `yarn preview`: serve the production build locally
- `yarn test`: run the tests in watch mode (`yarn test run` for a single run)

# 80s Weather Channel App

Modeled this app off of the Weather Channel vibe from the 80s. Hideous or nostalgic, you decide.

using...

- create-react-app
- craco (Create React App Configuration Override)
- Tailwind

## Setup

### Make a new folder and clone repos

Make a new folder called weather (or whatever you want)

```
mkdir weather
cd weather
```

Clone this repo in that folder

Clone https://github.com/clintonmedbery/weather-api to that folder

### Set up API

`cd weather-api`

### Install the dependencies

`npm install`

### Get a weatherbit key

https://www.weatherbit.io/

### Create a .env file and add this line

```WEATHERBIT_API_KEY="my key"```

### Run With Node

`npm run start`

### Run With Nodemon

`npm run dev`

### Setup client

Then in a new tab or window go back to /weather

### Create a .env file and add this line

`REACT_APP_BASE_WEATHER_URL='http://localhost:4000'`

Then

```
cd weather-api
yarn install
yarn start
```

### Basic Create React App Instructions

### Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

This project displays a list of movies by fetching data from [themoviedb](https://www.themoviedb.org/) API.

## Features

- Movies list displaying: poster, title, popularity, rating and genres
- List ordered by popularity (most populars first)
- Rating filter: shows only movies having a minimun rating

## Requirements

- [node.js 10](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/get-npm)

## Getting started

### `Preparing the ambient`

Copy `.env.template` to `.env.local`. Edit recent created `.env.local` file setting your `API KEY` to access `themoviedb`API.

### `Installing`

Run `npm install` command to install this applications and its dependencies.

### `Running`

Run `npm start` command to start the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

## TODO

- Remove API KEY from .env files as it's not the most secure way to deal with secrets
- Improve edge cases handling, such as wrong API KEY provided
- Load next available pages from API


# tracker-app
Node-React application to track things.

## Setup

### Install

    npm install
    
    npm install nodemon -g

# Development

## Client

    npm run dev

Go to [http://localhost:3000/](http://localhost:3000/)

## Server

In development mode the express server will use webpack dev middleware and webpack hot middleware to automatically refresh the browser when changes are made to the `src/client` directory.


# Production

## Client

    npm run bundle

This will create the production bundle in the `/dist` directory

## Server

    npm start

Go to [http://localhost:3000/](http://localhost:3000/)


React application will be served from the `/dist` directory, all other static assets will be served from the `/assets` directory.


### API

API paths will be served from `/api`

### Run Tests

    npm test

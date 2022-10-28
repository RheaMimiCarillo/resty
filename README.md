# RESTy

## Author

- Rhea Carillo

## Live Site

[Click to try RESTy here](https://rhea-resty.netlify.app/)

## Overview

This React app will allow users to test RESTful API requests by inputting a well-formatted request string and getting results, in return.

## Setup

This project currently doesn't require setup.

## Running the app

- run `npi i` to install dependencies

- run `npm start` to start an instance of the React App

- optionally, supply your API key to a .env file

Application Flow:

- User enters an API URL
- Chooses a REST Method
- Clicks the “Go” button
- Application fetches data from the URL given, with the method specified
- Application stores the API request and returned data into state
  - Updates the list of previous API calls
- Application Displays the response headers and results separately
  - Both headers and results should be “pretty printed” JSON

## Tests

We have tests to see if our API gets called with a mock server.

## UML

![Lab UML](./images/lab26uml.png "Lab UML")

# Vertex

angular-seed is a seed repository using angular and webpack.

Check out my [todo demo](https://github.com/brittanymoore/angular-demo-todo) for a more robust example
including some functionality, tests, and mocking.

This repo provides the following:
* angular
* webpack
* typescript
* sass
* AOT w/ lazy-loading (@ngtools/webpack)
* unit testing with karma
* end-to-end testing with protractor
* linting with tslint / codelyzer
* some angular-cli support**

**This project was not built with angular-cli, but has the minimal support required to use ng generate (because it's awesome).

## Getting Started

### Get the Code

```
git clone https://github.com/brittanymoore/angular-seed.git
cd angular-seed
npm install
```

### Launch the App

To run the app in development mode:

```
npm run start
```

Once the server is running, open a browser and navigate to localhost:3000.

### Build

Vertex currently has the following build modes.

| Build Mode        | Command        | Output   | EnableProdMode | Uglify | AOT   | Mocks |
| ----------------- | -------------- | -------  | -------------- | ------ | ----- | ----- |
| Dev               | build          | dev      | false          | false  | false | true  |
| Prod              | build:prod     | dist     | true           | true   | true  | false |

Each mode has a start command similar to the one above, which can be used to launch the app in localhost:

```
npm run start
npm run start:prod
```

### Test

Support is built-in for unit testing with Karma and end-to-end testing with Protractor.

Unit tests should be added to a file named **.spec.ts somewhere in src directory tree. To run the tests:

```
npm run test
```

E2E tests should be added to a file named **.e2e.ts somewhere in the src directory tree. To run the tests:

```
// initialize or update webdriver
npm run webdriver-manager -- update

// run these commands in separate windows
npm run start
npm run test:e2e
```
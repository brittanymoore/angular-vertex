# Vertex

angular-vertex is a seed repository for angular (2.0+) and webpack. For 
angularjs (1.0), see [angularjs-vertex](https://github.com/brittanymoore/angularjs-vertex).

The master branch contains:
* angular (4.0.0)
* webpack (2.3.2)
* typescript (2.2.1)
* less (2.7.2)
* AOT w/ lazy-loading (@ngtools/webpack)
* unit testing with karma
* end-to-end testing with protractor
* backendless development wih mocks

## Getting Started

### Get the Code

```
git clone https://github.com/brittanymoore/angular-vertex.git
cd angular-vertex
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

| Build Mode        | Command        | Output   | EnableProdMode | Uglify | AOT   |
| ----------------- | -------------- | -------  | -------------- | ------ | ----- |
| Dev               | build          | dev      | false          | false  | false |
| Prod              | build:prod     | dist     | true           | true   | true  |

Each mode has a start command similar to the one above, which can be used to launch the app in localhost:

```
npm run start
npm run start:prod
```

### Test

Support is built-in for unit testing with Karma and end-to-end testing with Protractor.

Unit tests should be added to a file named **.spec.ts somewhere in src directory tree. To run the tests:

```
npm run test:unit
```

E2E tests should be added to a file named **.e2e.ts somewhere in the src directory tree. To run the tests:

```
// initialize or update webdriver
npm run webdriver-manager -- update

// run these commands in separate windows
npm run start
npm run test:e2e
```

### Mocking

Vertex comes with a 'mock' module that provides backendless development for 
the rest of the application. It currently contains mocks for the To-do module 
that can be used as a starting point. These mocks are also used in the e2e 
tests for the To-do module.

By default, the services mock SharePoint REST API. You can substitute any 
other backend by updating the web service calls and helpers in 
todo/todo.service.ts and mock/mock.service.ts.
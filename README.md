# Vertex

Vertex is an Angular seed project using TypeScript and Webpack. It contains an example module
that can be used as a reference to get started, routing, backendless support, multiple build paths
(including one using ahead-of-time compilation), and a testing structure for unit and end-to-end testing.

## Getting Started

### Get the Code

```
git clone https://github.com/brittanymoore/angular-vertex.git
cd vertex
npm install
npm run webdriver:update
```

### Launch the App

To run the app in development mode:

```
npm run start
```

Once the server is running, open a browser and navigate to localhost:3000.

### Build

Vertex currently has three build modes: 

| Build Mode        | Command        | Output   | EnableProdMode | Uglify | AOT     |
| ----------------- | -------------- | -------  | -------------- | ------ | ------- |
| Dev               | build:dev      | dev      | false          | false  | false   |
| Prod              | build:prod     | dist     | true           | true   | false   |
| Prod (AOT)        | build:prod:aot | dist-aot | true           | true   | true    |

Each mode has a start command similar to the one above, which can be used to launch the app in localhost:

```
npm run start:dev
npm run start:prod
npm run start:prod:aot
```

### Test

Support is built-in for unit testing with Karma and end-to-end testing with Protractor (both use Jasmine).

Unit tests should be added to a file named **.spec.ts somewhere in src directory tree. To run the tests:

```
npm run test:unit
```

E2E tests should be added to a file named **.e2e.ts somewhere in the src directory tree. To run the tests:

```
// run these commands in separate windows
npm run start:dev
npm run test:e2e
```

### Mocking

Vertex comes with a 'mock' module that provides backendless development for the rest of the application. It 
currently contains mocks for the To-do module that can be used as a starting point. These mocks are also used
in the e2e tests for the To-do module.

By default, the services mock SharePoint REST API. You can substitute any other backend by updating
the web service calls and helpers in todo/todo.service.ts and mock/mock.service.ts. 

In order to run the application using actual HTTP calls, change the USE_MOCK variable in the webpack config
to false before building.









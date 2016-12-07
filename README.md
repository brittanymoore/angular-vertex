# Vertex

Vertex is a seed project using Angular 2, TypeScript and Webpack.

## Getting Started

### Get the Code

```
git clone https://github.com/brittanymoore/vertex.git
cd vertex
npm install
```

### Launch the App

To run the app in development mode:

```
npm run start
```

Once the server is running, open a browser and navigate to localhost:3000.

### Build

Vertex currently has four build modes: 

| Build Mode        | Command        | Output   | EnableProdMode | Uglify | AOT     | MockBackend |
| ----------------- | -------------- | -------  | -------------- | ------ | ------- | ----------- |
| Dev               | build:dev      | dev      | false          | false  | false   | true        |
| Prod              | build:prod     | dist     | true           | true   | false   | true        |
| Prod (AOT)        | build:prod:aot | dist-aot | true           | true   | true    | true        |
| Prod (SharePoint) | build:prod:sp  | dist-sp  | true           | true   | false   | false       |

Each mode using MockBackend has a start command similar to the one above, which can be used to launch the app in localhost:

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

### SharePoint Integration

Production (SharePoint) does not use mocked data, so it must be copied to SharePoint to validate. A template file for index in 
SharePoint can be found in config/index.template.sp.aspx. This contains the minimal SharePoint controls needed to display the
app and access the REST API.

In order to use index.aspx correctly, ensure the following paths are correct:

* base tag's href attribute
* script tags containing the app

Note that the SharePoint-integrated components expect to find lists on the site itself. For example, the TODO component
expects a list called "Tasks" with a "Name" column. In general, the class files in each component will describe the list structure
needed.









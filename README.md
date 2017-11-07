# Angular Seed

Angular seed using Webpack.

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
* 'ng g' support (Angular CLI)
* express / json-server

Notes:
As of Angular 5.0.0, AotPlugin has been replaced by [AngularCompilerPlugin](https://www.npmjs.com/package/@ngtools/webpack). See link for 
upgrade instructions.

## Getting Started

### Get the Code

```
git clone https://github.com/brittanymoore/angular-seed.git
cd angular-seed
npm install
```

### Launch the App

Run the commands below in two separate terminals. The serve command starts an express server, and the start command launches the 
angular application.

```
npm run serve
npm start
```

### Build

| Build Mode  | Command(s)     | Output Dir | EnableProdMode | Uglify | AOT   |
| ----------- | -------------- | ---------- | -------------- | ------ | ----- |
| Development | build          | dev        | no             | no     | no    |
|             | start          |            |                |        |       |
| Production  | build:prod     | dist       | yes            | yes    | yes   |
|             | start:prod     |            |                |        |       |


### Test

Run unit tests:
```
npm test
```

Run end-to-end tests:
```
// initialize or update webdriver
npm run webdriver-manager -- update

// run these commands in separate windows
npm run start
npm run test:e2e
```
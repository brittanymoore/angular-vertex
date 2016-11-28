# Vertex - Where SharePoint Meets Angular 2

Vertex is a seed project for SharePoint apps using Angular 2, TypeScript and Webpack. 

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

### Builds

Vertex currently has four build modes: 

| Build Mode              | Command                | Output   | EnableProdMode | Uglify | # Files | AOT     | MockBackend |
| ----------------------- | ---------------------- | -------  | -------------- | ------ | ------  | ------- | ----------- |
| Development             | npm run build:dev      | dev      | false          | false  | 1       | false   | true        |
| Production              | npm run build:prod     | dist     | true           | true   | 2       | false   | true        |
| Production (AOT)        | npm run build:prod:aot | dist-aot | true           | true   | 1       | true    | true        |
| Production (SharePoint) | npm run build:prod:sp  | dist-sp  | true           | true   | 2       | false   | false       |

Each mode using MockBackend has a start command similar to the one above, which can be used to launch the app in localhost:

```
npm run start:dev
npm run start:prod
npm run start:prod:aot
```

### SharePoint Integration

Production (SharePoint) does not use mocked data, so it must be copied to SharePoint to validate. The dist-sp directory contains
a minimal index.aspx file that can be used to load your app in SharePoint.

In order to use index.aspx correctly, ensure the following paths are correct:

* The <base> tag's href attribute
* The <script /> tags containing the app

Please note that the SharePoint-integrated components expect to find lists on the site itself. For example, the TODO component
expects a list called "Tasks" with a "Name" column. In general, the class files in each component will describe the list structure
needed.









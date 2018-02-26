/* tslint:disable:no-console */

const express = require('express');
const jsonServer = require('json-server');

const app = express();

app.use(jsonServer.defaults());
app.use(jsonServer.router('./config/db.json'));

app.listen(process.env.PORT || 3000, () => {
  console.log('Server is running on localhost:3000.');
});

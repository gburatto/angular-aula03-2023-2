/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import express from 'express';
import * as path from 'path';

import { MongoClient } from 'mongodb';

MongoClient.connect(
  'mongodb://angular-aula03-2023-2_devcontainer-db-1/'
).then((client: MongoClient) => {
  app.locals.db = client;
  console.log('Conectado ao MongoDB');
}).catch(err => {
  console.error(err);
});

const app = express();

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to api!' });
});

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);

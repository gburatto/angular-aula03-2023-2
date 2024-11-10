/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import express from 'express';
import * as path from 'path';

import cors from 'cors';

import { MongoClient } from 'mongodb';
import { favoritoRouter } from './routes/favorito.router';

MongoClient.connect(
  'mongodb://angular-aula03-2023-2_devcontainer-db-1/'
).then((client: MongoClient) => {
  app.locals.db = client.db('app-favoritos');
  console.log('Conectado ao MongoDB');
}).catch(err => {
  console.error(err);
});

const app = express();

// Adiciona como primeira camada de forma que também será o último:
app.use(cors()); // O middleware adiciona header HTTP CORS de resposta.

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to api!' });
});

app.use('/api/favorito', favoritoRouter);

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);

import { NextFunction, Request, Response, Router } from "express";

import { getCollection } from "../util/get-collection";
import { IFavorito } from "@nx-monorepo/comum";
import { WithId } from "mongodb";

export const favoritoRouter = Router();

// Se a requisição for HTTP GET /api/favorito:
favoritoRouter.get('/', async (req: Request, res: Response, next: NextFunction) => {
  const collection = getCollection<IFavorito>(req.app, 'favoritos');
  const favoritos = await collection.find().toArray();
  res.json(favoritos);
});

favoritoRouter.get('/:id', async (req: Request, res: Response, next: NextFunction) => {
  const _id: number = +req.params.id;
  const favorito: IFavorito = await getCollection<IFavorito>(
    req.app,
    'favoritos',
  ).findOne({ _id: _id});
  res.json(favorito);
});

favoritoRouter.put('/:id', async (req: Request, res: Response, next: NextFunction) => {
  const _id: number = +req.params.id;
  const body: IFavorito = req.body;
  const results: WithId<IFavorito> = await getCollection<IFavorito>(
    req.app,
    'favoritos',
  ).findOneAndReplace({ _id }, body);
  if (results) {
    res.json(body);
  } else {
    return next(new Error(`Favorito com ID ${_id} não encontrado!`));
  }
});

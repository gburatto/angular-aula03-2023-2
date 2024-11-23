import { NextFunction, Request, Response, Router } from "express";

import { getCollection } from "../util/get-collection";
import { IFavorito } from "@nx-monorepo/comum";

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

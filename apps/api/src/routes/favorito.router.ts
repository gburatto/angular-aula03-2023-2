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

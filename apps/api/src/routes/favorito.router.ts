import { NextFunction, Request, Response, Router } from "express";

import { getCollection } from "../util/get-collection";
import { IFavorito } from "@nx-monorepo/comum";
import { InsertOneResult, WithId } from "mongodb";

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

favoritoRouter.post('/', async (req: Request, res: Response, next: NextFunction) => {

  const body: IFavorito = req.body;

  // Descobrir o último ID usado no BD:
  const buscaMaxId = await getCollection<IFavorito>(
    req.app,
    'favoritos',
  ).find().sort({_id: -1}).limit(1).toArray();
  const novoId = (!buscaMaxId || buscaMaxId.length < 1) ? 1 : buscaMaxId[0]._id + 1;

  // Insere o favorito usando o novo ID descoberto:
  const favorito: IFavorito = {
    ...body,
    _id: novoId,
  }
  const results: InsertOneResult<IFavorito> = await getCollection<IFavorito>(
    req.app,
    'favoritos',
  ).insertOne(favorito);

  if (results.acknowledged) {
    res.json(favorito);
  } else {
    return next(new Error(`Não foi possível inserir o novo favorito!`));
  }
});

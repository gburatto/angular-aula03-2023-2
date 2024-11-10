import { Application } from "express";
import { Collection, Db } from "mongodb";

/**
 * Obtém uma referência fortemente tipada para uma coleção do MongoDB.
 *
 * @param app Aplicação ExpressJS onde está a referência para o client do MongoDB.
 * @param name Nome da coleção a ser acessada no MongoDB.
 * @returns Referência para a coleção MongoDB.
 */
export function getCollection<T>(
  app: Application,
  name: string,
): Collection<T> {
  const db: Db = app.locals.db;
  return db.collection(name);
}

import * as jsonWebToken from "jsonwebtoken";

import { IUsuario, IUsuarioJwt } from "@nx-monorepo/comum";

import { sanitizarUsuario } from "./sanitizacao";
import { expressjwt, Request } from "express-jwt";

const SENHA_SECRETA = 's3nh4S3crEt4';

export function criarToken(iUsuario: IUsuario): string {
  return jsonWebToken.sign(
    sanitizarUsuario(iUsuario),
    SENHA_SECRETA,
    {
      expiresIn: '10m',
    },
  );
}

export const verificarTokenJwt = expressjwt({
  secret: SENHA_SECRETA,
  algorithms: ['HS256'],
});

export type AuthorizedRequest = Request<IUsuarioJwt>;
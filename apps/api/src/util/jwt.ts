import * as jsonWebToken from "jsonwebtoken";

import { IUsuario } from "@nx-monorepo/comum";

import { sanitizarUsuario } from "./sanitizacao";

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
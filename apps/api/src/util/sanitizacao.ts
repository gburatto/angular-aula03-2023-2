import { IUsuario, IUsuarioSemSenha } from "@nx-monorepo/comum";

export function sanitizarUsuario(iUsuario: IUsuario): IUsuarioSemSenha {
  const usuarioSanitizado: IUsuario = {
    ...iUsuario,
  };
  delete usuarioSanitizado.senha;
  return usuarioSanitizado;
}
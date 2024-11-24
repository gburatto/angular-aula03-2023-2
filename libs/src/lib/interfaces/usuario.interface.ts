import { JwtPayload } from 'jsonwebtoken';

export interface IUsuario {

  _id: number;

  /**
   * Nome de usuário (login do usuário)
   */
  login: string;

  /**
   * Senha do usuário
   */
  senha: string;

  nome: string;

  /**
   * `true` se o usuário é administrador do sistema.
   */
  administrador: boolean;

}

export type IUsuarioESenha = Pick<IUsuario, 'login' | 'senha'>
export type IUsuarioSemSenha = Omit<IUsuario, 'senha'>
export type IUsuarioJwt = IUsuarioSemSenha & JwtPayload;

export interface IUsuarioLogado {

  jwt: string;

  usuario: IUsuarioSemSenha;

}
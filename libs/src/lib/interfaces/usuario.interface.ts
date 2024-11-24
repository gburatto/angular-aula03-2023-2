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
export interface IUsuarioLogado {

  usuario: IUsuario;
  
}
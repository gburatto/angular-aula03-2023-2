export interface IFavorito {

  /**
   * Identificador único do favorito.
   */
  _id: number;

  /**
   * URL da imagem que ilustra o favorito.
   */
  imagem: string;

  /**
   * Título (curto) do favorito.
   */
  titulo: string;

  /**
   * Descrição/chamada do favorito (1 parágrafo curto).
   */
  descricao: string;

  /**
   * URL do favorito ("link").
   */
  url: string;
  
}

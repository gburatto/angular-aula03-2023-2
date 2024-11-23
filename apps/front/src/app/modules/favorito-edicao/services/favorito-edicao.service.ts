import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IFavorito } from '@nx-monorepo/comum';
import { Observable, share } from 'rxjs';
import { API_BASE } from '../../../app.config';

@Injectable({
  providedIn: 'root'
})
export class FavoritoEdicaoService {

  private httpClient = inject(HttpClient);
  private apiBase = inject(API_BASE);

  public get(id: number): Observable<IFavorito> {
    return this.httpClient.get<IFavorito>(
      `${this.apiBase}/favorito/${id}`,
    );
  }

  public put(iFavorito: IFavorito): Observable<IFavorito> {
    const req$ =  this.httpClient.put<IFavorito>(
      `${this.apiBase}/favorito/${iFavorito._id}`,
      iFavorito,
    ).pipe(
      share(),
    );

    // Dispara a requisição:
    req$.subscribe();

    return req$;
  }

}

import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

import { IFavorito } from '@nx-monorepo/comum';
import { Observable, shareReplay } from 'rxjs';

import { API_BASE } from '../app.config';

@Injectable({
  providedIn: 'root'
})
export class FavoritoService {

  private httpClient = inject(HttpClient);
  private apiBase = inject(API_BASE);

  public getAll(): Observable<IFavorito[]> {
    return this.httpClient.get<IFavorito[]>(
      `${this.apiBase}/favorito`,
    ).pipe(
      shareReplay(),
    );
  }

}

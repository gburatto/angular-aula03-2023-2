import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

import { Observable, tap } from 'rxjs';

import { IUsuarioESenha, IUsuarioLogado } from '@nx-monorepo/comum';

import { API_BASE } from '../auth/auth.module';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private httpClient = inject(HttpClient);
  private apiBase = inject(API_BASE);

  public login(usuario: IUsuarioESenha): Observable<IUsuarioLogado> {
    return this.httpClient.post<IUsuarioLogado>(
      `${this.apiBase}/auth/login`,
      usuario,
    ).pipe(
      tap(usuarioLogado => {
        window.localStorage.setItem('jwt', usuarioLogado.jwt);
      }),
    );
  }

}

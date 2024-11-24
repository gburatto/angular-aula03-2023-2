import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';

export const jwtInterceptor: HttpInterceptorFn = (req, next) => {

  const authService = inject(AuthService);

  // Se houver token JWT salvo no localStorage:
  if (authService.jwt) {
    return next(req.clone({
      headers: req.headers.set('Authorization', `Bearer ${authService.jwt}`)
    }))
  }

  return next(req);
};

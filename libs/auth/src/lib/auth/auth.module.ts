import { InjectionToken, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { jwtInterceptor } from '../interceptors/jwt.interceptor';

export const API_BASE = new InjectionToken<string>('URL base do back-end');

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AuthRoutingModule
  ],
  providers: [
    provideHttpClient(
      withInterceptors([
        jwtInterceptor,
      ]),
    ),
  ]
})
export class AuthModule { }

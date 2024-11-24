import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { IUsuarioESenha } from '@nx-monorepo/comum';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'lib-auth',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
  ],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css',
})
export class AuthComponent {

  private fb = inject(FormBuilder);

  private router = inject(Router);

  private authService = inject(AuthService);

  public hide = true;

  public formGroup = this.fb.group({
    login: ['', Validators.required],
    senha: ['', Validators.required],
  });

  public login(): void {
    const iUsuarioESenha = this.formGroup.value as IUsuarioESenha;
    this.authService.login(iUsuarioESenha).subscribe({
      next: usuarioLogado => {
        this.router.navigate([ '/' ]);
        console.log(usuarioLogado);
      },
      error: error => {
        console.error('Erro ao fazer login:', error);
      },
    });
  }

}

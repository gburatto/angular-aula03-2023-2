import { Component, inject, Input } from '@angular/core';

import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';


@Component({
  selector: 'app-form-favorito',
  templateUrl: './form-favorito.component.html',
  styleUrl: './form-favorito.component.css',
  standalone: true,
  imports: [
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule
  ]
})
export class FormFavoritoComponent {
  @Input({
    required: true,
  })
  public id!: string;

  private fb = inject(FormBuilder);

  public formGroup = this.fb.group({
    titulo    : ['', Validators.required],
    descricao : ['', Validators.required],
    imagem    : ['', Validators.required],
    url       : ['', Validators.required],
  });

  onSubmit(): void {
    alert('Thanks!');
  }
}

import { Component, inject, Input, OnInit } from '@angular/core';

import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { FavoritoEdicaoService } from '../../services/favorito-edicao.service';


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
export class FormFavoritoComponent implements OnInit {
  @Input({
    required: true,
  })
  public get id(): string {
    return `${this.formGroup.controls['_id'].value || ''}`;
  }
  public set id(value: string) {
    this.formGroup.controls['_id'].setValue(+(value || '0'));
  }

  private fb = inject(FormBuilder);

  private favoritoEdicaoService = inject(FavoritoEdicaoService);

  public formGroup = this.fb.group({
    _id       : [0],
    titulo    : ['', Validators.required],
    descricao : ['', Validators.required],
    imagem    : ['', Validators.required],
    url       : ['', Validators.required],
  });

  onSubmit(): void {
    alert('Thanks!');
  }

  public ngOnInit(): void {
    // Se estiver editando:
    if (this.id) {
      this.favoritoEdicaoService.get(+this.id).subscribe(iFavorito => {
        this.formGroup.setValue(iFavorito);
      });
    }
  }

}

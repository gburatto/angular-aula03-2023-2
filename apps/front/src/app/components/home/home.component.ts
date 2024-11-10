import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map } from 'rxjs';
import { FavoritoService } from '../../services/favorito.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatGridListModule,
    CommonModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {

  private favoritoService = inject(FavoritoService)
  public favoritos$ = this.favoritoService.getAll();

  public breakpointObserver = inject(BreakpointObserver);

  public umaColuna$ = this.breakpointObserver.observe([
    Breakpoints.XSmall,
    Breakpoints.Small,
  ]).pipe(map(state => state.matches));

  public duasColuna$ = this.breakpointObserver.observe([
    Breakpoints.Medium,
  ]).pipe(map(state => state.matches));

}

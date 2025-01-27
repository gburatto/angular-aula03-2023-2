import { Component } from '@angular/core';
import { LayoutComponent } from "./components/layout/layout.component";

@Component({
  standalone: true,
  imports: [
    LayoutComponent
],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PageAccueilComponent } from './pages/page-accueil/page-accueil.component';
import { HeaderComponent } from './component/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PageAccueilComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Piauger_paul_BA3';
}

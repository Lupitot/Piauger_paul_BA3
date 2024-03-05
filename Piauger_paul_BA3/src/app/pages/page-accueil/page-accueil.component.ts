import { Component } from '@angular/core';
import { HeaderComponent } from '../../component/header/header.component';
import { ListArticlesComponent } from '../../component/list-articles/list-articles.component';
@Component({
  selector: 'page-accueil',
  standalone: true,
  imports: [HeaderComponent, ListArticlesComponent],
  templateUrl: './page-accueil.component.html',
  styleUrl: './page-accueil.component.scss',
})
export class PageAccueilComponent {}

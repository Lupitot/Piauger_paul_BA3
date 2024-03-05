import { Component } from '@angular/core';
import { ListPanierComponent } from '../../component/list-panier/list-panier.component';

@Component({
  selector: 'app-page-panier',
  standalone: true,
  imports: [ListPanierComponent],
  templateUrl: './page-panier.component.html',
  styleUrl: './page-panier.component.scss',
})
export class PagePanierComponent {}

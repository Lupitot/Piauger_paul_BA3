import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { PanierService } from '../../services/panier.service';

@Component({
  selector: 'app-one-article',
  standalone: true,
  imports: [CommonModule, NgFor],
  templateUrl: './one-article.component.html',
  styleUrl: './one-article.component.scss',
})
export class OneArticleComponent {
  @Input() name: string = '';

  @Input() image: any = '';

  @Input() season: string = '';

  @Input() Buy: string = '';

  @Input() quantity: number = 0;

  @Input() ID: string = '';

  @Output() addArticle = new EventEmitter<string>();

  constructor(private panierService: PanierService) {}

  ngOnInit() {}

  addArticlefunc(value: string) {
    this.addArticle.emit(value);
    this.quantity++;
    this.panierService.addArticlePanier({
      id: 0,
      name: this.name,
      quantity: this.quantity,
      price: 0,
      totalPrice: 0,
    });
    console.log(this.panierService.listeArticlePanier);
  }
}

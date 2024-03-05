import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { PanierService } from '../../services/panier.service';
import { IArticlePanier } from '../../interfaces/iarticle-panier';

@Component({
  selector: 'app-list-panier',
  standalone: true,
  imports: [CommonModule, NgFor],
  templateUrl: './list-panier.component.html',
  styleUrl: './list-panier.component.scss',
})
export class ListPanierComponent {
  panierSub!: any;

  resultPanier: IArticlePanier[] = [];

  constructor(private panierService: PanierService) {}

  // ngAfterViewInit() {
  //  console.log(localStorage.getItem('panier') || '[]');
  // }

  // loadPanier() {
  //   return this.panierService.getArticlePanier();
  // }
}

//c'est en partie ici le gros pb de localstorage

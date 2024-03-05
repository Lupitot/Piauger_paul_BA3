import { Injectable } from '@angular/core';
import { IArticlePanier } from '../interfaces/iarticle-panier';

@Injectable({
  providedIn: 'root',
})
export class PanierService {
  constructor() {
    // let p = localStorage.getItem('panier') || '[]';
    // JSON.parse(p);
  }
  public listeArticlePanier: IArticlePanier[] = [];

  public addArticlePanier(article: IArticlePanier) {
    this.listeArticlePanier.push(article);
    localStorage.setItem('panier', JSON.stringify(this.listeArticlePanier));
  }

  // public getArticlePanier() {
  //   let p = localStorage.getItem('panier') || '[]';
  //   return JSON.parse(p);
  // }
}
// c'est aussi en partie ici le gros pb de localstorage
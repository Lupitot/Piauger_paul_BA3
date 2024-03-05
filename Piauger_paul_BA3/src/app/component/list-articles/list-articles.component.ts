import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { RecupArticleService } from '../../services/recup-article.service';
import { IArticle } from '../../interfaces/iarticle';
import { Subscription } from 'rxjs';
import { OneArticleComponent } from '../one-article/one-article.component';
import { IArticlePanier } from '../../interfaces/iarticle-panier';

@Component({
  selector: 'app-list-articles',
  standalone: true,
  imports: [CommonModule, NgFor, OneArticleComponent],
  templateUrl: './list-articles.component.html',
  styleUrl: './list-articles.component.scss',
})
export class ListArticlesComponent {
  articleSub!: Subscription;

  totalOneArticle: number = 0;

  resultArticle: IArticle[] = [];
  constructor(private recupArticleService: RecupArticleService) {}

  ngOnInit() {
    this.loadArticles();
  }

  loadArticles() {
    this.articleSub = this.recupArticleService.getArticle().subscribe({
      next: (data) => {
        console.log(data);
        this.resultArticle = data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  callBackAddArticle(value: string) {}

  ngOnDestroy() {
    this.articleSub.unsubscribe();
  }
}

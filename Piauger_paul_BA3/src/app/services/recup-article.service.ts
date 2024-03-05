import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { IArticle } from '../interfaces/iarticle';

@Injectable({
  providedIn: 'root',
})
export class RecupArticleService {
  constructor(private http: HttpClient) {}

  private apiRoute: any = {
    Article: 'https://www.eleguen.ovh/api/v1/articles',
  };

  public getArticle(): Observable<IArticle[]> {
    return this.http
      .get(this.apiRoute.Article)
      .pipe(map((data: any) => data as IArticle[]));
  }
}

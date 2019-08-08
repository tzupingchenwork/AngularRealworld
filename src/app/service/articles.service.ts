import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Article } from '../shared/models/article.model';
import { Observable, of } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor( private http: HttpClient) { }
  private articlesUrl = 'api/articles';  // URL to web api
  getArticles(): Observable<Article[]> {
    const url = `${this.articlesUrl}`;
    return this.http.get<Article[]>(url);
  }
  // article: Article
  addArticle( article: any ): Observable<Article> {
    const url = `${this.articlesUrl}`;
    // return this.http.post<Article>(this.articlesUrl , article , httpOptions);
    return this.http.post<Article>('api/articles/' , article , httpOptions);
  }
}

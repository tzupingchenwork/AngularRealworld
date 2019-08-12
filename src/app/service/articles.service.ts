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
  // private articlesUrl = 'api/articles';  // URL to web api
  private articlesUrl = 'http://localhost:3000';  // URL to web api
  // 取得文章列表
  getArticles(): Observable<any> {
    // const url = `${this.articlesUrl}`;
    // console.log(this.articlesUrl);
    return this.http.get<any>(this.articlesUrl + '/articles');
  }
  // 取得單一文章
  getArticle(id: number): Observable<Article> {
    // const url = `${this.articlesUrl}/${id}`;
    const url = this.articlesUrl  + '/articles/' + id ;
    return this.http.get<Article>(url);
  }

  addArticle( articles: any ): Observable<Article> {
    // const url = `${this.articlesUrl}`;
    // return this.http.post<Article>(this.articlesUrl , article , httpOptions);
    return this.http.post<Article>( this.articlesUrl + '/articles' ,  articles , httpOptions);
  }

  deleteArticle(articles: Article | number): Observable<Article> {
    const id = typeof articles === 'number' ? articles : articles.id;
    // return this.http.delete<Article>(this.articlesUrl + id, httpOptions);
    return this.http.delete<Article>(this.articlesUrl  + '/articles/' + id, httpOptions);
  }
  updateHero(articles: Article): Observable<any> {
    return this.http.put(this.articlesUrl, articles , httpOptions);
  }
}

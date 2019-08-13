import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Article } from '../shared/models/article.model';
import { Observable, of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor( private http: HttpClient,
               private route: ActivatedRoute) { }
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
    return this.http.post<Article>( this.articlesUrl + '/articles' ,  articles , httpOptions);
  }

  deleteArticle(articles: Article | number): Observable<Article> {
    const id = typeof articles === 'number' ? articles : articles.id;
    return this.http.delete<Article>(this.articlesUrl  + '/articles/' + id, httpOptions);
  }
  // updateArticle(articles: any): Observable<any> {
  //   const id = +this.route.snapshot.paramMap.get('id');
  //   return this.http.put(this.articlesUrl + '/articles/' + id, articles , httpOptions);
  // }
  updateArticle(articles: any ): Observable<any> {
    // console.log(id);
    console.log(articles.id);
    return this.http.put(this.articlesUrl + '/articles/' + articles.id, articles , httpOptions);
  }
}

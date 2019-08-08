import { Component, OnInit } from '@angular/core';

import { ArticlesService } from '../../service/articles.service';
import { Article } from '../../shared/models/article.model';
@Component({
  selector: 'app-article-items',
  templateUrl: './article-items.component.html',
  styleUrls: ['./article-items.component.css']
})
export class ArticleItemsComponent implements OnInit {

  articles: Article[];
  constructor( private articlesService: ArticlesService ) { }

  ngOnInit() {
    this.getArticles();
  }

  getArticles(): void {
    this.articlesService.getArticles()
        .subscribe(articles => this.articles = articles);
  }
}

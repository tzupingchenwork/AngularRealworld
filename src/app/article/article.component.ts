import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticlesService } from '../service/articles.service';
import { Article } from '../shared/models/article.model';


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  article: Article;
  // @Input() article: Article;
  constructor(
    private route: ActivatedRoute,
    private articlesService: ArticlesService,
    private router: Router
    ) { }

  ngOnInit() {
    this.getArticle();
  }
  // 取得單一文章
  getArticle(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.articlesService.getArticle(id)
      .subscribe(article => this.article = article);
  }

  deleteArticle() {
    this.articlesService.deleteArticle(this.article.id)
      .subscribe(
        success => {
          this.router.navigateByUrl('/');
        }
      );
  }

}

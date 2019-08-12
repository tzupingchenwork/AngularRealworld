import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Article } from '../shared/models/article.model';
import { ArticlesService } from '../service/articles.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  articles: Article[];
  // articleForm: FormGroup;
  articleForm: FormGroup;
  constructor(private route: ActivatedRoute,
              private articlesService: ArticlesService,
              private fb: FormBuilder ) {
              this.createForm();
              }
  ngOnInit() {
  }
  createForm() {
    this.articleForm = this.fb.group({
      id : 0,
      title : '',
      description : '',
      body : '',
    });
  }
  onSubmit(value: any): void {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(value);
    this.articlesService.updateArticle(value, id)
                        .subscribe( articles => console.log(articles));
  }
}

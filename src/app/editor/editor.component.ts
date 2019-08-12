import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Article } from '../shared/models/article.model';
import { ArticlesService } from '../service/articles.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  articles: Article[];
  // articleForm: FormGroup;
  articleForm: FormGroup;
  constructor(private articlesService: ArticlesService,
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
    this.articlesService.addArticle(value)
                        .subscribe(article => {
                          console.log(article);
                        });
  }

}

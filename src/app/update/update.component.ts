import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Article } from '../shared/models/article.model';
import { ArticlesService } from '../service/articles.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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
              private http: HttpClient,
              private articlesService: ArticlesService,
              private fb: FormBuilder ) {
              this.createForm();
              }
  ngOnInit() {
  }
  createForm() {
    const Artid = +this.route.snapshot.paramMap.get('id');
    this.articleForm = this.fb.group({
      id : Artid,
      title : '',
      description : '',
      body : '',
    });
  }
  onSubmit(value: any): void {
    console.log(value);
    this.articlesService.updateArticle(value)
                        .subscribe( () => console.log('articles'));
  }

}

import { TestBed, inject, ComponentFixture } from '@angular/core/testing';

import { ArticlesService } from './articles.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ArticleComponent } from '../article/article.component';
import { httpClientInMemBackendServiceFactory } from 'angular-in-memory-web-api';
import { of } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

// const mockHttp = jasmine.createSpyObj('mockHttp', ['get', 'add', 'delete', 'update']);

describe('service: ArticlesService', () => {
  let component: ArticleComponent;
  let fixture: ComponentFixture<ArticleComponent>;
  let service: ArticlesService;

  beforeEach( () => TestBed.configureTestingModule({
    imports: [
          HttpClientTestingModule,
          RouterTestingModule
        ],
    providers: [ArticlesService],
    declarations: [ ArticleComponent ]
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleComponent);
    component = fixture.componentInstance;
    service = TestBed.get(ArticlesService);
    spyOn(service, 'getArticle').and.returnValue(
      of({
        id: 1,
        title: 'title1',
        description: 'description1',
        body: 'body1'
      })   // Observable
    );
    fixture.detectChanges();
  });

  it('建立服務', () => {
    expect(service).toBeTruthy();
  });

  it('取得文章列表', () => {
    // const http = HttpClientTestingModule;
    service.getArticles().subscribe(res => {
      expect(res[0].id).toBe(1);
      expect(res[0].title).toBe('title1');
      expect(res[0].description).toBe('description1');
      expect(res[0].body).toBe('body1');
    });
  });

});

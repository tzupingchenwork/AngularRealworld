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
    fixture.detectChanges();
  });

  it('建立服務', () => {
    expect(service).toBeTruthy();
  });

  it('取得文章列表', () => {
    spyOn(service, 'getArticles').and.returnValue(
      of({
        id: 1,
        title: 'title1',
        description: 'description1',
        body: 'body1'
      })   // Observable
    );
    service.getArticles().subscribe(res => {
      expect(res[0].id).toBe(1);
      expect(res[0].title).toBe('title1');
      expect(res[0].description).toBe('description1');
      expect(res[0].body).toBe('body1');
    });
  });

  it('取得id:1文章', () => {
    spyOn(service, 'getArticle').and.returnValue(
      of({
        id: 1,
        title: 'title1',
        description: 'description1',
        body: 'body1'
      })   // Observable
    );

    service.getArticle(1).subscribe(res => {
      expect(res.title).toBe('title1');
      expect(res.description).toBe('description1');
      expect(res.body).toBe('body1');
    });
  });

  it('新增文章', () => {
    spyOn(service, 'addArticle').and.returnValue(
      of({
        id: 1,
        title: 'title1',
        description: 'description1',
        body: 'body1'
      })   // Observable
    );
    const article = {
      id: 1,
      title: 'title1',
      description: 'description1',
      body: 'body1'};
    service.addArticle(article).subscribe(res => {
      expect(res.title).toBe('title1');
      expect(res.description).toBe('description1');
      expect(res.body).toBe('body1');
    });
  });

  it('刪除文章', () => {
    spyOn(service, 'deleteArticle').and.returnValue(
      of(null)
    );
    const id = 1;
    service.deleteArticle(id).subscribe(res => {
      expect(res.title).toBeFalsy();
      expect(res.description).toBeFalsy();
      expect(res.body).toBeFalsy();
    });
  });

  it('修改id:1 文章', () => {
    spyOn(service, 'updateArticle').and.returnValue(
      of({
        id: 1,
        title: 'N-title',
        description: 'N-description',
        body: 'N-body'
      })   // Observable
    );
    const article = {
      id: 1,
        title: 'N-title',
        description: 'N-description',
        body: 'N-body'
      };
    service.updateArticle(article).subscribe(res => {
      expect(res.title).toBe('N-title');
      expect(res.description).toBe('N-description');
      expect(res.body).toBe('N-body');
    });
  });

});

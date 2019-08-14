import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleComponent } from './article.component';
import { ArticlesService } from '../service/articles.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';



describe('ArticleComponent', () => {
  let component: ArticleComponent;
  let fixture: ComponentFixture<ArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        // ActivatedRoute,
        // Router
        RouterTestingModule,
        HttpClientTestingModule

      ],
      providers: [ArticlesService],
      declarations: [ ArticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('建立元件', () => {
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('取得單一文章 會回傳obs物件', () => {
    // const id = +this.route.snapshot.paramMap.get('id');
    // expect(id).toBeTruthy();
    const id = 1;
    const service = TestBed.get(ArticlesService);
    const fun = service.getArticle(id)
      .subscribe(article => this.article = article);
    expect(fun).toBeTruthy();

  });

  it('刪除單一文章 會回傳obs物件', () => {
    const id = 1;
    const service = TestBed.get(ArticlesService);
    const fun = service.deleteArticle(id)
        .subscribe(
          success => {
            this.router.navigateByUrl('/');
          });
    expect(fun).toBeTruthy();

  });

});


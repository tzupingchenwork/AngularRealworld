import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ArticleItemsComponent } from '../shared/article-items/article-items.component';



@NgModule({
  declarations: [
    HomeComponent,
    ArticleItemsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
})
export class HomeModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/layout/header/header.component';
import { FooterComponent } from './shared/layout/footer/footer.component';
import { SettingsModule } from './settings/settings.module';
import { EditorModule } from './editor/editor.module';
import { ArticleModule } from './article/article.module';
import { AuthComponent } from './auth/auth.component';
import { AuthModule } from './auth/auth.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// Web API
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { HttpClientModule } from '@angular/common/http';
import { UpdateComponent } from './update/update.component';
import { UpdateModule } from './update/update.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AuthComponent,
    // UpdateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SettingsModule,
    EditorModule,
    ArticleModule,
    AuthModule,
    HttpClientModule,
    // HttpClientInMemoryWebApiModule.forRoot(
    // InMemoryDataService, { dataEncapsulation: false }
    // ),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

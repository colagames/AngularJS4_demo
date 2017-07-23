import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { FormsModule } from '@angular/forms';
import { ArticleComponent } from './article/article.component';
import { MaskPipe } from './mask.pipe'; // 註冊Forms 才可以使用 [(ngModule)]


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ArticleComponent,
    MaskPipe
  ],
  imports: [
    BrowserModule,
    FormsModule, // import上面的 FormsModule
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

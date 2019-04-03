import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BookListComponent } from './books/book-list.component';
import { RatingComponent } from './shared/rating/rating.component';
import { BookDetailComponent } from './books/book-detail/book-detail.component';

import { ConvertToSpacePipe } from './shared/convert-to-space.pipe';
import { HomeComponent } from './home/home.component';
import {BookDetailGuard} from './books/book-detail/book-detail.guard';


@NgModule({
  declarations: [
    AppComponent, BookListComponent, ConvertToSpacePipe, RatingComponent, BookDetailComponent, HomeComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'books', component: BookListComponent},
      {path: 'book-detail/:id',
        canActivate: [ BookDetailGuard ],
        component: BookDetailComponent},
      {path: 'home', component: HomeComponent},
      {path: '', redirectTo: 'home', pathMatch: 'full'}
      ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

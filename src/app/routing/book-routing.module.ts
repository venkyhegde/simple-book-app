import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {BookListComponent} from '../books/book-list.component';
import {BookDetailGuard} from '../books/book-detail/book-detail.guard';
import {BookDetailComponent} from '../books/book-detail/book-detail.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: 'books', component: BookListComponent},
      {
        path: 'book-detail/:id',
        canActivate: [BookDetailGuard],
        component: BookDetailComponent
      },
    ])
  ],
  exports: [RouterModule]
})
export class BookRoutingModule { }

import {NgModule} from '@angular/core';

import {BookListComponent} from './book-list.component';

import {BookDetailComponent} from './book-detail/book-detail.component';

import {RouterModule} from '@angular/router';
import {BookDetailGuard} from './book-detail/book-detail.guard';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [
    BookListComponent, BookDetailComponent
  ],
  imports: [
    RouterModule.forChild([
      {path: 'books', component: BookListComponent},
      {
        path: 'book-detail/:id',
        canActivate: [BookDetailGuard],
        component: BookDetailComponent
      },
    ]),

    SharedModule
  ]

})
export class BookModule {
}

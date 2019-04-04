import {NgModule} from '@angular/core';
import {BookListComponent} from './book-list.component';
import {BookDetailComponent} from './book-detail/book-detail.component';

import {SharedModule} from '../shared/shared.module';
import {BookRoutingModule} from '../routing/book-routing.module';

@NgModule({
  declarations: [
    BookListComponent, BookDetailComponent
  ],
  imports: [
    BookRoutingModule, SharedModule
  ]

})
export class BookModule {
}

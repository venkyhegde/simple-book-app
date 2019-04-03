import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {BookDetailService} from './book-detail.service';
import {Book} from '../book';

@Component({
  selector: 'pm-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  private pageTitle = '';
  book: Book;
  errorMessage: string;

  constructor(private route: ActivatedRoute, private bookDetailService: BookDetailService, private router: Router) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    this.bookDetailService.getBook(id).subscribe(
      book => {
        this.book = book;
        this.pageTitle = this.book.title + this.book.subtitle;
      },
      error => this.errorMessage = <any> error

    );
  }

  onBack(): void {
      this.router.navigate(['/books']);
  }
}

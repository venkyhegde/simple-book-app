import {Component, OnInit} from '@angular/core';
import {Book} from './book';
import {BookService} from './book.service';


@Component({
  // selector: 'pm-books',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})

export class BookListComponent implements OnInit {
  pageTitle = 'Books List';
  imageWidth = 50;
  marginWidth = 10;
  showImage = false;
  // to filter the books based on filter string, changing normal filterString declaration to private and use getters and setters
  private _filterString: string;
  books: Book[];
  // also need to have an array to store the filtered books
  filteredBooks: Book[] = [];
  errorMessage: string;

  get filterString(): string {
    return this._filterString;
  }

  set filterString(value: string) {
    // when a filter string comes assign that to filterString and filter books based on filterString
    this._filterString = value;
    this.filteredBooks = this.filterString ? this.performFilter(this._filterString) : this.books;
  }

  /**
   * Constructor to initialize
   */
  constructor(private bookService: BookService) {
    this._filterString = ''; // initializing filter string to empty in the beginning.
  }

  /**
   * method to show or hide image
   */
  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  /**
   * This method takes the user entered filter string and
   * @param _filterString
   */
  private performFilter(_filterString: string): Book[] {
    _filterString = _filterString.toLocaleLowerCase(); // convert the filter string to lower case to ignore cases.
    // filtering the books array
    return this.books.filter((book: Book) =>
      book.title.toLocaleLowerCase().indexOf(_filterString) !== -1);
  }


  onRatingCliked($event: string): void {
    this.pageTitle = this.pageTitle + ' ' + $event;
  }

  ngOnInit(): void {
    this.bookService.getBooks().subscribe(
      books => {
        this.books = books;
        this.filteredBooks = this.books;
      },
      error => this.errorMessage = <any>error
    );

  }
}

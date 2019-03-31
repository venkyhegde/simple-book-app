import {Component} from '@angular/core';
import {Book} from './book';


@Component({
  selector: 'pm-books',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent {
  pageTitle = 'Books List!';
  imageWidth = 50;
  marginWidth = 10;
  showImage = false;

  books: Book[] = [
    {
      isbn: 9781593275846,
      title: "Eloquent JavaScript, Second Edition",
      subtitle: "A Modern Introduction to Programming",
      author: "Marijn Haverbeke",
      publisher: "No Starch Press",
      price: 23.5,
      rating: 3.9,
      description: "JavaScript lies at the heart of almost every modern web application, from social apps to the newest browser-based games. Though simple for beginners to pick up and play with, JavaScript is a flexible, complex language that you can use to build full-scale applications.",
      imageUrl: "http://eloquentjavascript.net/img/cover.jpg",


    },
    {
      isbn: 9781449331818,
      title: "Learning JavaScript Design Patterns",
      subtitle: "A JavaScript and jQuery Developer's Guide",
      author: "Addy Osmani",
      publisher: "O'Reilly Media",
      price: 33.5,
      rating: 4.1,
      description: "With Learning JavaScript Design Patterns, you'll learn how to write beautiful, structured, and maintainable JavaScript by applying classical and modern design patterns to the language. If you want to keep your code efficient, more manageable, and up-to-date with the latest best practices, this book is for you.",
      imageUrl: "https://addyosmani.com/resources/essentialjsdesignpatterns/cover/cover.jpg",

    }
  ];



  // to filter the books based on filter string, changing normal filterString declaration to private and use getters and setters
  private _filterString: string;


  get filterString(): string {
    return this._filterString;
  }

  set filterString(value: string) {
    // when a filter string comes assign that to filterString and filter books based on filterString
    this._filterString = value;
    this.filteredBooks = this.filterString ? this.performFilter(this._filterString) : this.books;
  }

  // also need to have an array to store the filtered books
  filteredBooks: Book[] = [];


  // methods

  /**
   * Constructor to initialize
   */
  constructor() {
    this._filterString = ''; // initializing filter string to empty in the beginning.
    this.filteredBooks = this.books;
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
    return this.books.filter((book: Book ) =>
      book.title.toLocaleLowerCase().indexOf(_filterString ) !== -1);
  }
}

import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {Book} from '../book';

@Injectable({
  providedIn: 'root',
})
export class BookDetailService {

  private url = 'http://localhost:8080/library/api/getBook/';

  constructor(private http: HttpClient) {

  }

  getBook(bookId): Observable<Book> {
    return this.http.get<Book>(this.url + bookId).pipe(
      tap(data => console.log('Book detail' + JSON.stringify(data))),
      catchError(this.errorHandler)
    );

}

  private errorHandler(err: HttpErrorResponse) {
    let errorMessage = '';

    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server error: ${err.error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}

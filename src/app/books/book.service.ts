import {Book} from './book';

import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import { catchError, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root',
})
export class BookService {

  // url endpoint
  private url = 'http://localhost:8080/library/api/allBooks';

  // initialize HttpClient
  constructor(private http: HttpClient) {

  }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.url).pipe(
      tap(data => console.log("All data - " + JSON.stringify(data))),
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

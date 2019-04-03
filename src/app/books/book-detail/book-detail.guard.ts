import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookDetailGuard implements CanActivate {

  constructor(private router: Router) {
  }


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // check if the id valid or not. if not display an alert and go back to books list
    const id = route.url[1].path;
    if (id.length !== 24) {
      alert('Invalid BookId: ' + id);
      this.router.navigate(['/books']);
      return false;
    }
    return true;
  };

}

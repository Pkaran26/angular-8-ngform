import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  _url = "";
  constructor(private _http: HttpClient) { }

  signUp(user: User){
    return this._http.post<any>(this._url, user)
    .pipe(catchError(this.errorHandler));
  }
  errorHandler(error: HttpErrorResponse){
    return throwError(error)
  }
}

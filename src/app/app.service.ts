import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpParams } from '@angular/common/http';
import { Observable,throwError } from 'rxjs';
import {tap,catchError,map} from 'rxjs/operators';
import { User } from './user';
@Injectable({
  providedIn: 'root'
})
export class AppService {
  apiurl='api/users';
  headers=new HttpHeaders().set('Content-Type','application/json').set('Accept','application/json');
  httpOptions={
    headers:this.headers
  };
  constructor(private http:HttpClient) { 

  }
  private handleError(error:any)
  {
    console.error(error);
    return throwError(error);
  }

  getUsers():Observable<User[]>{
    return this.http.get<User[]>(this.apiurl).pipe(
      tap(data=>console.log(data)),
      catchError(this.handleError)
    );
  }
}

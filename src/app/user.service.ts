import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {UserModel} from './registration/user.model';
import { Observable, throwError } from 'rxjs';
import { tap, map, catchError } from 'rxjs/operators';
import { errorHandler } from '@angular/platform-browser/src/browser';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':'application/json',
    'Autorization': 'Bearer my-token',
    'Acces-Control-Allow_Origin': 'http://127.0.0.1:8000'
  })
};   
@Injectable({
  providedIn: 'root'
})

export class UserService {

   
  constructor(private http: HttpClient) {}

  getUsers(){
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
  getUserDetails(userId){
    return this.http.get('https://jsonplaceholder.typicode.com/users/'+userId);
  }
  createUser(user: UserModel): Observable<UserModel>{
    console.log('In create user')
    console.log(user);
    return this.http.post<UserModel>('http://127.0.0.1:8000/register', user)
    // .pipe(
    //               tap((user: UserModel) => console.log(`Created user= ${JSON.stringify(user)}`)),
    //               (error)=>  throwError(error)
    //             );
  }

}

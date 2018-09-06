import { Injectable } from '@angular/core';
import {
    HttpEvent, 
    HttpInterceptor, 
    HttpHandler, 
    HttpRequest,
    HttpResponse 
  } from '@angular/common/http';
  import {Observable, throwError} from 'rxjs';
  import { catchError,tap} from 'rxjs/operators';

@Injectable()
export class InterceptorService implements HttpInterceptor{

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const reqCloned = req.clone({
      setHeaders:{
        "Content-Type": "application/json; charset=UTF-8",
        "Access-Control-Allow-Methods": "POST, PUT, DELETE, GET",
        // "Authorization" : "Bearer my-toke",
        "Access-Control-Allow-Origin": "http://localhost:8000/"      
      }
    });
    // reqCloned.headers.set('Access-Control-Allow-Origin', 'http://127.0.0.1:8000');
    // reqCloned.headers.set('Content-Type', 'application/json; charset=UTF-8');
    // reqCloned.headers.set('Authorization', 'Bearer my-token');

    return next.handle(reqCloned)
                // .pipe(
                //   tap(event => {
                //         if (event instanceof HttpResponse){
                //             console.log('Request seems OK');
                //             console.log(event.status)
                //         }
                //       },
                //       (error) => throwError(error)
                //   )
                // );
  }
}

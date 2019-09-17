import { Injectable, SystemJsNgModuleLoader } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthHttpInterceptorService implements HttpInterceptor {

  constructor() { }


  intercept(req: HttpRequest<any>, next: HttpHandler):  Observable<HttpEvent<any>> {

     console.log('requestmade now is : ' + req.toString());

     const authHeader = sessionStorage.getItem('basicauth');
     console.log(authHeader);


        req = req.clone({
        setHeaders: {
          'Authorization': `${authHeader}`,
          'Content-Type':  'application/json'

        }

      });


    return next.handle(req);
  }




}

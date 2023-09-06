import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
  HttpParams
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CommonHttpInterceptor implements HttpInterceptor {

  constructor() {}
  //swipe in method for each http 
  // which indicates the api
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    
    console.log("request" , request);
    //My target i want to add Authorazation : '' to the each api of header section
    let autherozation = "asdfasdfbasjdfaosfvyfugvbasjdg auiyvfuakvsfuaoslfausydfasbl";

  let userHeaders = new HttpHeaders({
     'Autheraztion' : autherozation,
     'userName'     : "Madan"
   })

  let userParams = new HttpParams().set("password","^&^%$#!@");

   //   Employee             Navigates to the office with handwash
   //   ApifromAngular     navigates to the server with userheaders
   let cloneAPI = request.clone({
     headers : userHeaders,
     params  : userParams
   })


    

    return next.handle(cloneAPI);
  }
}

import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    // console.log(req);
    req = req.clone({ setHeaders: { Authorization: 'Bearer ' + token}  });
    return next.handle(req);
  }
}


export const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IkFkbWluX3Rlc3RldCIsIm5hbWVpZCI6IjEiLCJzaWQiOiIwN2Q1OTQ5OC1iNDg4LTQ4N2MtODdjOS1kMjFhMzk1MWFiMDIiLCJqdGkiOiIwZWE1OGQzNi01MmUwLTQxZDctYTFmOC1iYmRkOTQ1OTEzNzYiLCJleHAiOjE2NDA2MTczOTQsImlzcyI6Imh0dHBzOi8vYXBpLnllc2RvY3Rvci5pby8iLCJhdWQiOiJodHRwczovL2FwaS55ZXNkb2N0b3IuaW8vIn0.aCo-F3chwzLRMzAYC60h6lLrmSZryTby9L7hZiZ2VXo"
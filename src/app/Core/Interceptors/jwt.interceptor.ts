import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AuthService } from '../Services/Auth.service';
import {CookieService} from '../Services/Cookie.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthService,
                private cookieService: CookieService) { }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        // const currentUser = this.authenticationService.currentUser();
        const user = JSON.parse(this.cookieService.getCookie('currentUser')!);
        const token = user.accessToken;
        if (token) {
            request = request.clone({
                setHeaders: {
                  Authorization: `Bearer ${token}`,
                }
            });
        }

        return next.handle(request);
    }
}

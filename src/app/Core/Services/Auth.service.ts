import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { User } from "../Models/user.model";
import { CookieService } from "./Cookie.service";

@Injectable({ providedIn: 'root' })
export class AuthService {

    //@ts-ignore
    user: User|null;
    constructor(private http: HttpClient, private cookieService: CookieService) {
    }

    /**
     * Returns the current user
     */
     public currentUser(): User|null {
        if (!this.user) {
            this.user = JSON.parse(this.cookieService.getCookie('currentUser')!) ;
        }
        return this.user;
    }

    /**
     * Performs the auth
     * @param username username of user
     * @param password password of user
     */
     login(username: string, password: string) {
        return this.http.post<any>(environment.BASE_END_POINT + `auth/signin`,
          { username, password });
    }

    /**
     * Logout the user
     */
     logout() {
        // remove user from local storage to log user out
        this.cookieService.deleteCookie('currentUser');
        //this.cookieService.deleteCookie('token');
        this.user = null;
    }

}

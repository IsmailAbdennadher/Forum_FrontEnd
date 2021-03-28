import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Comment } from "../Models/comment.model";
import { CookieService } from "./Cookie.service";

@Injectable({ providedIn: 'root' })
export class CommentService {

    constructor(private http: HttpClient, private cookieService: CookieService) {
    }

    getAll() : Observable<Comment[]> {
        return this.http.get<Comment[]>(environment.BASE_END_POINT + 'comment/all');
    }

    getCommentsByPostId(id: Number) {
        return this.http.get<Comment>(environment.BASE_END_POINT + 'comment/post/get' + id);
    }

}
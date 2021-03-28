import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Post } from "../Models/post.model";
import { CookieService } from "./Cookie.service";

@Injectable({ providedIn: 'root' })
export class PostService {

    constructor(private http: HttpClient, private cookieService: CookieService) {
    }

    getAll() : Observable<Post[]> {
        return this.http.get<Post[]>(environment.BASE_END_POINT + 'post/all');
    }
  createPost(post: Post) {
    return this.http.post<Post>(environment.BASE_END_POINT + 'post/create', post );
    }
  updatePost(post: Post) {
  return this.http.post<Post>(environment.BASE_END_POINT + 'post/update', post );
    }
    getUserPosts() : Observable<Post[]>{
        let iduser : Number;
        iduser = JSON.parse(this.cookieService.getCookie('currentUser')!).id;
        return this.http.get<Post[]>(environment.BASE_END_POINT + 'post/user/'+iduser);
    }
    getPostById(id: Number){
        return this.http.get<Post>(environment.BASE_END_POINT + 'post/get/' + id);
    }
    getNBComments(id : Number){
        return this.http.get<Number>(environment.BASE_END_POINT + 'post/get/number/'+ id );
    }

}
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { CookieService } from "./Cookie.service";

@Injectable({ providedIn: 'root' })
export class LikeService {

    constructor(private http: HttpClient, private cookieService: CookieService) {
    }
    likeComment(idUser: Number,idComment: Number){
        return this.http.post<any>(environment.BASE_END_POINT + 'like/comment/'+ idUser+'/'+idComment,null);
    }
    countLikesComment(idComment: Number){
        return this.http.get<Number>(environment.BASE_END_POINT + 'like/comment/count/'+idComment);
    }
    likePost(idUser: Number,idPost: Number){
        return this.http.post<any>(environment.BASE_END_POINT + 'like/post/'+ idUser+'/'+idPost,null);
    }
    countLikesPost(idPost: Number){
        return this.http.get<Number>(environment.BASE_END_POINT + 'like/post/count/'+idPost);
    }
    isLikedComment(idUser: Number,idComment: Number){
        return this.http.get<any>(environment.BASE_END_POINT + 'like/comment/isLiked/'+ idUser+'/'+idComment);
    }
    isLikedPost(idUser: Number,idPost: Number){
        return this.http.get<any>(environment.BASE_END_POINT + 'like/post/isLiked/'+ idUser+'/'+idPost);
    }
}
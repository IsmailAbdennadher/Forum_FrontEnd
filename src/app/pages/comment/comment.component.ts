import { Component, Input, OnInit } from '@angular/core';
import { Comment } from 'src/app/Core/Models/comment.model';
import { User } from 'src/app/Core/Models/user.model';
import { CommentService } from 'src/app/Core/Services/Comment.service';
import { CookieService } from 'src/app/Core/Services/Cookie.service';
import { LikeService } from 'src/app/Core/Services/Like.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  constructor(private cookieService: CookieService, private commentService: CommentService, private serviceLike: LikeService) {
   }

  user : User;
  @Input() comment : Comment;
  isLiked : boolean;

  ngOnInit(): void {
    this.user = JSON.parse(this.cookieService.getCookie('currentUser')!);
    this.serviceLike.isLikedComment(this.user.id!,this.comment.id!).subscribe( commentLiked => {
      this.isLiked = commentLiked;
    });
    this.commentService.getCommentById(this.comment.id!).subscribe(data => {
      this.comment.comment_owner = data.comment_owner;
      this.comment.likes = data.likes!;
      this.comment.dateSinceCommented = data.dateSinceCommented;
    });
  }


   like(id : Number){
     this.serviceLike.likeComment(Number(this.user.id),id).subscribe(data =>{
       if(data != null){
          this.isLiked = true;
        }
       else{
          this.isLiked = false;
        }
        this.serviceLike.countLikesComment(this.comment.id!).subscribe(count => {
          this.comment.likes = count;
        });
     });
   }
}

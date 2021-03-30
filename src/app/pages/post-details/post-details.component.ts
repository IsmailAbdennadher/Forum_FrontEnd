import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Comment } from 'src/app/Core/Models/comment.model';
import { Post } from 'src/app/Core/Models/post.model';
import { User } from 'src/app/Core/Models/user.model';
import { AuthService } from 'src/app/Core/Services/Auth.service';
import { CommentService } from 'src/app/Core/Services/Comment.service';
import { CookieService } from 'src/app/Core/Services/Cookie.service';
import { PostService } from 'src/app/Core/Services/Post.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  user : User;
  //comments : Comment[];
  post : Post;
  nbReplies: Number;
  nbUserPosts:Number;
  nbUserComments: Number;
  commentForm: FormGroup;

  constructor(private cookieService: CookieService, private postService: PostService, private formBuilder: FormBuilder,
    private route: ActivatedRoute,private router: Router,private authService : AuthService , private commentService : CommentService ) {
      this.nbUserComments = 0;
      this.nbUserPosts = 0;
     }

  ngOnInit(): void {
    this.commentForm = this.formBuilder.group({
      comment_text : ["",Validators.required]
    });
    this.nbUserPosts = Number(this.cookieService.getCookie('nbUserPosts'));
    this.loadScripts();
    const postId = Number(this.route.snapshot.paramMap.get('id'));
    this.user = JSON.parse(this.cookieService.getCookie('currentUser')!);
    this.commentService.getCountCommentsByUser(this.user.id!).subscribe(count => {
      this.nbUserComments = count;
    });
    this.postService.getPostById(postId).subscribe(data => {
      data.comments.sort((a,b)=> a.id! - b.id!);
      this.post = data;
      this.postService.getNBComments(this.post.id!).subscribe(totalComments =>{
        this.nbReplies = totalComments;
      });
    });
  }

  loadScripts() { 
  
    // This array contains all the files/CDNs 
    const dynamicScripts = environment.scripts;
    //for app-comment
    dynamicScripts.push('https://mythemestore.com/beehive-preview/wp-content/themes/beehive/buddypress/js/beehive-bp-like.min.js?ver=1.3.5.1');
    for (let i = 0; i < dynamicScripts.length; i++) { 
      const node = document.createElement('script'); 
      node.src = dynamicScripts[i]; 
      node.type = 'text/javascript'; 
      node.async = false; 
      document.getElementsByTagName('head')[0].appendChild(node); 
    }
   }
   logout(){
     this.authService.logout();
     this.router.navigate(['/login']);
   }

   onSubmit(){
    let c = new Comment();
    c = this.commentForm.value;
    c.comment_owner = this.user;
    c.belong_post = this.post;
    this.commentService.createComment(c).subscribe(data => {
      alert('comment added !');
      const postId = Number(this.route.snapshot.paramMap.get('id'));
      this.postService.getPostById(postId).subscribe(data => {
        data.comments.sort((a,b)=> a.id! - b.id!);
        this.post = data;
        this.postService.getNBComments(this.post.id!).subscribe(totalComments =>{
          this.nbReplies = totalComments;
        });
      });
      this.commentForm = this.formBuilder.group({
        comment_text : ["",Validators.required]
      });
    },
    (e)=>{console.log(e);});
  }
}

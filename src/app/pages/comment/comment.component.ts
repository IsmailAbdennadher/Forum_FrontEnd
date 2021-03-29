import { Component, Input, OnInit } from '@angular/core';
import { Comment } from 'src/app/Core/Models/comment.model';
import { CommentService } from 'src/app/Core/Services/Comment.service';
import { CookieService } from 'src/app/Core/Services/Cookie.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  constructor(private cookieService: CookieService, private commentService: CommentService) { }

  @Input() comment : Comment;

  ngOnInit(): void {
    this.loadScripts();
    this.commentService.getCommentById(this.comment.id!).subscribe(data => {
      console.log(data);
      this.comment.comment_owner = data.comment_owner;
    });
  }

  loadScripts() { 
  
    // This array contains all the files/CDNs 
    const dynamicScripts = environment.scripts;
    dynamicScripts.push('https://mythemestore.com/beehive-preview/wp-content/themes/beehive/buddypress/js/beehive-bp-like.min.js?ver=1.3.5.1');
    for (let i = 0; i < dynamicScripts.length; i++) { 
      const node = document.createElement('script'); 
      node.src = dynamicScripts[i]; 
      node.type = 'text/javascript'; 
      node.async = false; 
      document.getElementsByTagName('head')[0].appendChild(node); 
    }
   }

}

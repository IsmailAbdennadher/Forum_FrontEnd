import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Comment } from 'src/app/Core/Models/comment.model';
import { Post } from 'src/app/Core/Models/post.model';
import { User } from 'src/app/Core/Models/user.model';
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

  constructor(private cookieService: CookieService, private postService: PostService, private formBuilder: FormBuilder,
    private route: ActivatedRoute,private router: Router ) { }

  ngOnInit(): void {
    this.loadScripts();
    const postId = Number(this.route.snapshot.paramMap.get('id'));
    this.user = JSON.parse(this.cookieService.getCookie('currentUser')!);
    this.postService.getPostById(postId).subscribe(data => {
      this.post = data;
    });
  }

  loadScripts() { 
  
    // This array contains all the files/CDNs 
    const dynamicScripts = environment.scripts;
    for (let i = 0; i < dynamicScripts.length; i++) { 
      const node = document.createElement('script'); 
      node.src = dynamicScripts[i]; 
      node.type = 'text/javascript'; 
      node.async = false; 
      document.getElementsByTagName('head')[0].appendChild(node); 
    }
   }
}

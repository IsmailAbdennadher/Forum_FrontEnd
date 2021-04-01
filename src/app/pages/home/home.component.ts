import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { Post } from 'src/app/Core/Models/post.model';
import { User } from 'src/app/Core/Models/user.model';
import { AuthService } from 'src/app/Core/Services/Auth.service';
import { CookieService } from 'src/app/Core/Services/Cookie.service';
import { LikeService } from 'src/app/Core/Services/Like.service';
import { PostService } from 'src/app/Core/Services/Post.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user : any;
  posts : Post[];
  nbPostLikes: Map<string, Number>;
  constructor(private cookieService: CookieService, private postService: PostService,private likeService : LikeService,
    private router: Router,private authService : AuthService) {
    this.nbPostLikes = new Map<string,Number>();
   }

  ngOnInit(): void {
    this.loadScripts();
    this.user = JSON.parse(this.cookieService.getCookie('currentUser')!);
    this.postService.getAll().subscribe(data => {
      this.posts = data;
      this.posts.forEach((val,index)=>{
        this.likeService.countLikesPostAndComments(val.id!).subscribe(postLikeCounts=>{
          this.nbPostLikes.set(val.id!.toString(),postLikeCounts);
        });
      });
      console.log(data);
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
   logout(){
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}

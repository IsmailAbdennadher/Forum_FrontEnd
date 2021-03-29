import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Post } from 'src/app/Core/Models/post.model';
import { User } from 'src/app/Core/Models/user.model';
import { CookieService } from 'src/app/Core/Services/Cookie.service';
import { PostService } from 'src/app/Core/Services/Post.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-userposts',
  templateUrl: './userposts.component.html',
  styleUrls: ['./userposts.component.css']
})
export class UserpostsComponent implements OnInit {

  user : User;
  posts : Post[];
  postForm : FormGroup;
  constructor(private cookieService: CookieService, private postService: PostService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.postForm = this.formBuilder.group({
      title : ["",Validators.required],
      post_text : ["",Validators.required]
    });
    this.loadScripts();
    this.user = JSON.parse(this.cookieService.getCookie('currentUser')!);
    this.postService.getUserPosts().subscribe(data => {
      this.posts = data;
      this.cookieService.setCookie('nbUserPosts',this.posts.length.toString(),1);
      console.log(data);
    });
  }

  loadScripts() { 
  
    // This array contains all the files/CDNs 
    const dynamicScripts = environment.scripts;
    dynamicScripts.push('https://mythemestore.com/beehive-preview/wp-includes/js/jquery/ui/autocomplete.min.js?ver=1.11.4');
    dynamicScripts.push('https://mythemestore.com/beehive-preview/wp-content/plugins/bbpress/templates/default/js/editor.min.js?ver=2.6.6');
    dynamicScripts.push('https://mythemestore.com/beehive-preview/wp-content/plugins/buddypress/bp-templates/bp-nouveau/js/buddypress-nouveau.min.js?ver=7.1.0');
    dynamicScripts.push('https://mythemestore.com/beehive-preview/wp-includes/js/comment-reply.min.js?ver=5.4.4');
    dynamicScripts.push('https://mythemestore.com/beehive-preview/wp-includes/js/quicktags.min.js?ver=5.4.4');
    dynamicScripts.push('https://mythemestore.com/beehive-preview/wp-includes/js/jquery/ui/autocomplete.min.js?ver=1.11.4');
    for (let i = 0; i < dynamicScripts.length; i++) { 
      const node = document.createElement('script'); 
      node.src = dynamicScripts[i]; 
      node.type = 'text/javascript'; 
      node.async = false; 
      document.getElementsByTagName('head')[0].appendChild(node); 
    }
   }
   onSubmit(){
     let p = new Post();
     p = this.postForm.value;
     p.dateofpublication = new Date();
     this.postService.createPost(p).subscribe(data => {
       alert('post added !');
       this.ngOnInit();
       document.location.reload;
     },
     (e)=>{console.log(e);});
   }
}

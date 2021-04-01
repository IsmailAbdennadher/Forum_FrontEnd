import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Post } from 'src/app/Core/Models/post.model';
import { User } from 'src/app/Core/Models/user.model';
import { AuthService } from 'src/app/Core/Services/Auth.service';
import { CommentService } from 'src/app/Core/Services/Comment.service';
import { CookieService } from 'src/app/Core/Services/Cookie.service';
import { PostService } from 'src/app/Core/Services/Post.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-userprofil',
  templateUrl: './userprofil.component.html',
  styleUrls: ['./userprofil.component.css']
})
export class UserprofilComponent implements OnInit {
  user: User;
  nbUserPosts: Number;
  posts: Post[];
  nbUserComments: Number;
  view : boolean;
  edit : boolean;
  userEditForm: FormGroup;

  constructor(private router: Router,private authService : AuthService,private cookieService: CookieService,
    private postService: PostService,private commentService : CommentService,private formBuilder: FormBuilder) {
      this.nbUserComments = 0;
      this.nbUserPosts = 0;
      this.view = true;
      this.edit = false;
     }

  ngOnInit(): void {
    this.loadScripts();
    
    this.user = JSON.parse(this.cookieService.getCookie('currentUser')!);
    this.authService.getUserById(this.user.id!).subscribe(user => {
      this.user = user;
      console.log(this.user.email);
      this.userEditForm = this.formBuilder.group({
        name: [this.user.name, [Validators.required]],
        dateofbirth: [this.user.dateofbirth, Validators.required],
        email: [this.user.email, Validators.required],
        phone: [this.user.phone, Validators.required]
      });
    });
    //document.body.className = "activity bp-user my-activity my-account just-me buddypress bp-nouveau bbp-user-page single singular bbpress page-template-default page page-id-0 page-parent logged-in theme-beehive woocommerce-no-js beehive beehive-user buddychat-is-active bp-is-my-profile beehive-child elementor-default elementor-kit-588 title-bar-active beehive-social-layout panel-collapsed no-sidebar no-js";
    this.postService.getUserPosts().subscribe(data => {
      this.posts = data;
      this.nbUserPosts = data.length;
      //we save the nb of posts that a user has to use it in other pages
      this.cookieService.setCookie('nbUserPosts',this.posts.length.toString(),1);
      console.log(data);
    }); 
    this.commentService.getCountCommentsByUser(this.user.id!).subscribe(count => {
      this.nbUserComments = count;
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
  toggleView(view : string){
    switch(view){
      case "view":
        document.getElementById('public-personal-li')!.className = "bp-personal-sub-tab current selected";
        document.getElementById('edit-personal-li')!.className = "bp-personal-sub-tab";
        this.view = true;
        this.edit =false;
        break;
      case "edit":
        document.getElementById('public-personal-li')!.className = "bp-personal-sub-tab";
        document.getElementById('edit-personal-li')!.className = "bp-personal-sub-tab current selected";
        this.edit =true;
        this.view =false;
        break;
    }
  }
  onSubmit(){
    let u = new User();
    u = this.userEditForm.value;
    u.id = this.user.id!;
    this.authService.updateUser(u).subscribe(user => {
      alert('profile updated');
      document.location.reload();
    });
  }
}

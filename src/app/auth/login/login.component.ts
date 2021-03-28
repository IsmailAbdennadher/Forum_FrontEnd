import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/Core/Services/Auth.service';
import { CookieService } from 'src/app/Core/Services/Cookie.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router,
    private authService: AuthService,private cookieService: CookieService) { }

  ngOnInit(): void {
    this.loadScripts();
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', Validators.required],
    });

    document.body.className = "home-page bp-nouveau home page-template page-template-page-templates page-template-full-width page-template-page-templatesfull-width-php page page-id-95 theme-beehive woocommerce-no-js beehive beehive-guest-user beehive-child elementor-default elementor-kit-588 elementor-page elementor-page-95 desktop-slidenav full-width no-js";
    let t = document.body.querySelector("app-login")?.innerHTML;
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

 onSubmit(){
   this.authService.login(this.loginForm.value.username,this.loginForm.value.password).subscribe(token =>{
    this.cookieService.deleteCookie('currentUser');
    if (token) {
      this.cookieService.setCookie('currentUser', JSON.stringify(token), 1);
      this.router.navigate(['/home']);
      /* this.userService
        .getAccountInfo(this.f.email.value)
        .subscribe(this.handleResponseUser, this.handleError); */
    }

   });
 }

 get f() { return this.loginForm.controls; }
}

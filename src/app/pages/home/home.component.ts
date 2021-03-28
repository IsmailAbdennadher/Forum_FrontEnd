import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Core/Models/user.model';
import { CookieService } from 'src/app/Core/Services/Cookie.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user : any;
  constructor(private cookieService: CookieService) { }

  ngOnInit(): void {
    this.loadScripts();
    this.user = JSON.parse(this.cookieService.getCookie('currentUser')!);
    console.log(this.user);
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

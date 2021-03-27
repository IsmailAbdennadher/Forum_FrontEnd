import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.loadScripts();
    console.log('login component');
    document.body.className = "home-page bp-nouveau home page-template page-template-page-templates page-template-full-width page-template-page-templatesfull-width-php page page-id-95 theme-beehive woocommerce-no-js beehive beehive-guest-user beehive-child elementor-default elementor-kit-588 elementor-page elementor-page-95 desktop-slidenav full-width no-js";
    let t = document.body.querySelector("app-login")?.innerHTML;
     /*  console.log(document.body.getElementsByTagName("app-login")?.item(0)?.replaceWith(""));
      console.log(document.body.getElementsByTagName("app-root")?.item(0)?.replaceWith(""));
  
    if(t != undefined)
      {
        let div = document.createElement('div');
        div.innerHTML = t;
        div.id = "beehive-page";
        div.className = "site";
        document.body.appendChild(div);
      } */
    /* this.loadScript('https://mythemestore.com/beehive-preview/wp-includes/js/plupload/plupload.min.js?ver=2.1.9');
    this.loadScript('https://mythemestore.com/beehive-preview/wp-content/plugins/elementor/assets/lib/swiper/swiper.min.js?ver=5.3.6');
    this.loadScript('https://mythemestore.com/beehive-preview/wp-content/themes/beehive/assets/js/beehive-elements.min.js?ver=1.3.5.1'); */
   /*  this.loadScript('assets/wp-includes/js/jquery/ui/position.mine899.js?ver=1.11.4');
    this.loadScript('assets/wp-content/plugins/elementor/assets/lib/dialog/dialog.mina288.js?ver=4.8.1');
    this.loadScript('assets/wp-content/plugins/elementor/assets/lib/waypoints/waypoints.min05da.js?ver=4.0.2');
    this.loadScript('assets/wp-content/plugins/elementor/assets/lib/share-link/share-link.minc3cf.js?ver=3.0.15'); */
  }

  public loadScript(url : string) {
    let body = <HTMLDivElement> document.body;
    let script = document.createElement('script');
    script.innerHTML = '';
    script.src = url;
    script.type = 'text/javascript'; 
    body.appendChild(script);
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
  } } 

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('login component');
    document.body.className = "home-page bp-nouveau home page-template page-template-page-templates page-template-full-width page-template-page-templatesfull-width-php page page-id-95 theme-beehive woocommerce-no-js beehive beehive-guest-user beehive-child elementor-default elementor-kit-588 elementor-page elementor-page-95 desktop-slidenav full-width no-js";
    /* this.createLink('https://mythemestore.com/beehive-preview/wp-content/uploads/2020/01/cropped-site-icon-192x192.png'); */
    this.loadScript('assets/wp-includes/js/plupload/moxie.mine34c.js?ver=1.3.5');
    this.loadScript('https://mythemestore.com/beehive-preview/wp-includes/js/plupload/plupload.min.js?ver=2.1.9');
    this.loadScript('https://mythemestore.com/beehive-preview/wp-content/plugins/elementor/assets/lib/swiper/swiper.min.js?ver=5.3.6');
    this.loadScript('https://mythemestore.com/beehive-preview/wp-content/themes/beehive/assets/js/beehive-elements.min.js?ver=1.3.5.1');
    /* this.loadScript('https://mythemestore.com/beehive-preview/wp-content/plugins/elementor/assets/js/frontend-modules.min.js?ver=3.0.15'); */
    this.loadScript('https://mythemestore.com/beehive-preview/wp-includes/js/jquery/ui/position.min.js?ver=1.11.4');
    this.loadScript('https://mythemestore.com/beehive-preview/wp-content/plugins/elementor/assets/lib/dialog/dialog.min.js?ver=4.8.1');
    this.loadScript('https://mythemestore.com/beehive-preview/wp-content/plugins/elementor/assets/lib/waypoints/waypoints.min.js?ver=4.0.2');
    this.loadScript('https://mythemestore.com/beehive-preview/wp-content/plugins/elementor/assets/lib/share-link/share-link.min.js?ver=3.0.15');
/*     this.loadScript('https://mythemestore.com/beehive-preview/wp-content/plugins/elementor/assets/js/frontend.min.js?ver=3.0.15'); */
/*     this.loadScript('https://mythemestore.com/beehive-preview/wp-includes/js/jquery/jquery.js?ver=1.12.4-wp');
    this.loadScript('https://mythemestore.com/beehive-preview/wp-includes/js/jquery/jquery-migrate.min.js?ver=1.4.1'); 
    this.loadScript('https://mythemestore.com/beehive-preview/wp-content/plugins/buddypress/bp-core/js/widget-members.min.js?ver=7.1.0');
    this.loadScript('https://mythemestore.com/beehive-preview/wp-content/plugins/buddypress/bp-core/js/jquery-query.min.js?ver=7.1.0');
    this.loadScript('https://mythemestore.com/beehive-preview/wp-content/plugins/buddypress/bp-core/js/vendor/jquery-cookie.min.js?ver=7.1.0');
    this.loadScript('https://mythemestore.com/beehive-preview/wp-content/plugins/buddypress/bp-core/js/vendor/jquery-scroll-to.min.js?ver=7.1.0');
    this.loadScript('https://mythemestore.com/beehive-preview/wp-includes/js/underscore.min.js?ver=1.8.3');
    this.loadScript('https://mythemestore.com/beehive-preview/wp-includes/js/backbone.min.js?ver=1.4.0');
    this.loadScript('https://mythemestore.com/beehive-preview/wp-content/plugins/buddypress-media/lib/media-element/wp-mediaelement.min.js?ver=4.6.6');*/
  }

  public loadScript(url : string) {
    let body = <HTMLDivElement> document.body;
    let script = document.createElement('script');
    script.innerHTML = '';
    script.src = url;
    script.async = true;
    script.defer = true;
    body.appendChild(script);
}
createLink(url: string, rel: string) {
  let link: HTMLLinkElement = document.createElement('link');
  link.setAttribute('rel', rel);
  document.head.appendChild(link);
  link.setAttribute('href', url);
}
}

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  BASE_END_POINT: "http://localhost:8080/api/",
  scripts: ["assets/wp-includes/js/jquery/jquery4a5f.js?ver=1.12.4-assets/wp",
  "assets/wp-includes/js/jquery/jquery-migrate.min330a.js?ver=1.4.1"
  ,"assets/wp-includes/js/plupload/moxie.mine34c.js?ver=1.3.5"
  ,"assets/wp-includes/js/plupload/plupload.min6c17.js?ver=2.1.9"
  ,"assets/wp-content/plugins/buddypress/bp-core/js/widget-members.min9d27.js?ver=7.1.0"
  ,"assets/wp-content/plugins/buddypress/bp-core/js/jquery-query.min9d27.js?ver=7.1.0"
  ,"assets/wp-content/plugins/buddypress/bp-core/js/vendor/jquery-cookie.min9d27.js?ver=7.1.0"
  ,"assets/wp-content/plugins/buddypress/bp-core/js/vendor/jquery-scroll-to.min9d27.js?ver=7.1.0"
  ,"assets/wp-content/themes/beehive/assets/js/popper.min5035.js?ver=1.3.5.1"
      ,"assets/wp-content/themes/beehive/assets/js/bootstrap.min5035.js?ver=1.3.5.1"
      ,"assets/wp-content/themes/beehive/assets/js/mscrollbar.min5035.js?ver=1.3.5.1"
      ,"assets/wp-content/themes/beehive/assets/js/wow.min5035.js?ver=1.3.5.1"
      ,"assets/wp-content/themes/beehive/assets/js/jquery.shorten.min5035.js?ver=1.3.5.1"
      ,"assets/wp-content/themes/beehive/assets/js/jquery.fitvids.min5035.js?ver=1.3.5.1"
      ,"assets/wp-content/themes/beehive/bbpress/js/beehive-bbp.min5035.js?ver=1.3.5.1"  
      ,"assets/wp-content/themes/beehive/buddypress/js/beehive-bp.min5035.js?ver=1.3.5.1"
      ,"assets/wp-content/themes/beehive/assets/js/beehive-login.min5035.js?ver=1.3.5.1"
      ,"assets/wp-content/themes/beehive/assets/js/sticky-kit.min5035.js?ver=1.3.5.1"
      ,"assets/wp-includes/js/imagesloaded.min55a0.js?ver=3.2.0"
      ,"assets/wp-content/plugins/woocommerce/assets/js/jquery-blockui/jquery.blockUI.min44fd.js?ver=2.70"
      ,"assets/wp-content/plugins/woocommerce/assets/js/frontend/add-to-cart.min287d.js?ver=4.8.0"
      ,"assets/wp-content/plugins/woocommerce/assets/js/js-cookie/js.cookie.min6b25.js?ver=2.1.4"
      ,"assets/wp-content/plugins/woocommerce/assets/js/frontend/woocommerce.min287d.js?ver=4.8.0"
      ,"assets/wp-content/plugins/woocommerce/assets/js/frontend/cart-fragments.min287d.js?ver=4.8.0"
      ,"assets/wp-includes/js/masonry.mind617.js?ver=3.3.2","assets/wp-content/plugins/bbpress/templates/default/js/editor.mind7ad.js?ver=2.6.6"
      ,"assets/wp-includes/js/underscore.min4511.js?ver=1.8.3"
      ,"assets/wp-includes/js/backbone.min2fca.js?ver=1.4.0"
      ,"assets/wp-content/plugins/buddypress-media/app/assets/js/rtmedia.min13f7.js?ver=4.6.6"
      ,"assets/wp-content/plugins/buddypress-media/app/assets/js/rtMedia.backbone13f7.js?ver=4.6.6"
  ,"https://mythemestore.com/beehive-preview/wp-includes/js/plupload/plupload.min.js?ver=2.1.9"
      ,"https://mythemestore.com/beehive-preview/wp-content/plugins/elementor/assets/lib/swiper/swiper.min.js?ver=5.3.6"
      ,"https://mythemestore.com/beehive-preview/wp-content/themes/beehive/assets/js/beehive-elements.min.js?ver=1.3.5.1"
      ,"assets/wp-includes/js/jquery/ui/position.mine899.js?ver=1.11.4"
      ,"assets/wp-content/plugins/elementor/assets/lib/dialog/dialog.mina288.js?ver=4.8.1"
      ,"assets/wp-content/plugins/elementor/assets/lib/waypoints/waypoints.min05da.js?ver=4.0.2"
      ,"assets/wp-content/plugins/elementor/assets/lib/share-link/share-link.minc3cf.js?ver=3.0.15"
      ,"assets/wp-content/themes/beehive/assets/js/flexmenu.min5035.js?ver=1.3.5.1"
      ,"assets/wp-content/themes/beehive/assets/js/hiraku.min5035.js?ver=1.3.5.1"
      ,"assets/wp-content/themes/beehive/assets/js/beehive.min5035.js?ver=1.3.5.1"
      ,"assets/wp-content/plugins/buddypress-media/lib/media-element/mediaelement-and-player.min13f7.js?ver=4.6.6"
      ,"assets/wp-content/plugins/buddypress-media/lib/touchswipe/jquery.touchSwipe.min13f7.js?ver=4.6.6"
      ,"assets/wp-includes/js/wp-embed.min7263.js?ver=5.4.4"
      ,"assets/wp-content/plugins/buddypress/bp-core/js/vendor/jquery.caret.min9d27.js?ver=7.1.0"
      ,"assets/wp-content/plugins/buddypress/bp-core/js/vendor/jquery.atwho.min9d27.js?ver=7.1.0"
      ,"assets/wp-content/plugins/buddypress/bp-activity/js/mentions.min9d27.js?ver=7.1.0","assets/wp-content/plugins/buddypress/bp-templates/bp-nouveau/js/buddypress-nouveau.min9d27.js?ver=7.1.0"
      ,"assets/wp-content/plugins/contact-form-7/includes/js/scripts9dff.js?ver=5.3.2"
      ,"assets/wp-content/plugins/buddypress-media/lib/media-element/wp-mediaelement.min13f7.js?ver=4.6.6"
      ,"assets/wp-content/themes/beehive/bbpress/js/beehive-bbp.min5035.js?ver=1.3.5.1",
      "assets/wp-content/themes/beehive/buddypress/js/beehive-bp.min5035.js?ver=1.3.5.1",
    "https://mythemestore.com/beehive-preview/wp-includes/js/plupload/plupload.min.js?ver=2.1.9",
    "https://mythemestore.com/beehive-preview/wp-content/plugins/elementor/assets/lib/swiper/swiper.min.js?ver=5.3.6",
  "https://mythemestore.com/beehive-preview/wp-content/themes/beehive/assets/js/beehive-elements.min.js?ver=1.3.5.1",
"assets/wp-content/plugins/woocommerce/assets/js/frontend/woocommerce.min287d.js?ver=4.8.0"]
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

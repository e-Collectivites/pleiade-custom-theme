(function ($, once, Drupal) {
  Drupal.behaviors.minisidebarBehavior = {
    attach: function (context, settings) {
      "use strict";

      once('minisidebarBehavior', '#main-wrapper', context).forEach(() => {

        $("#main-wrapper").AdminSettings({
          Theme: false, // this can be true or false ( true means dark and false means light ),
          Layout: "vertical",
          LogoBg: "skin3", // You can change the Value to be skin1/skin2/skin3/skin4/skin5/skin6
          NavbarBg: "skin6", // You can change the Value to be skin1/skin2/skin3/skin4/skin5/skin6
          SidebarType: "mini-sidebar",
          SidebarColor: "skin3", // You can change the Value to be skin1/skin2/skin3/skin4/skin5/skin6
          SidebarPosition: true, // it can be true / false ( true means Fixed and false means absolute )
          HeaderPosition: true, // it can be true / false ( true means Fixed and false means absolute )
          BoxedLayout: false, // it can be true / false ( true means Boxed and false means Fluid )
        });

      }); // end once foreach

    }
  };
})(jQuery, once, Drupal);

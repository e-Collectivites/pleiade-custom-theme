(function ($, once, Drupal) {
  Drupal.behaviors.customBehavior = {
    attach: function (context, settings) {
      "use strict";

      once("customBehavior", "body", context).forEach(() => {
        
        
        // $('.container-fluid').slick({
        //   slidesToShow: 1,
        //   slidesToScroll: 1,
        //   // prevArrow:'<i data-feather="arrow-left" class="feather-sm"></i>',
        //   // nextArrow:'<i data-feather="arrow-right" class="feather-sm"></i>',
        //   prevArrow:"<button type='button' class='slick-prev pull-left'><i data-feather='arrow-left' class='feather-sm'></i></button>",
        //   nextArrow:"<button type='button' class='slick-next pull-right'><i data-feather='arrow-right' class='feather-sm'></i></button>"
        //   });
        // $('a[data-slide]').click(function(e) {
        //     e.preventDefault();
        //     var slideno = $(this).data('slide');
        //     $('.container-fluid').slick('slickGoTo', slideno - 1);
        //   });
        $(".preloader").fadeOut();
        // Feather Icon Init Js
        feather.replace();

        // ==============================================================
        // Theme options
        // ==============================================================
        // ==============================================================
        // sidebar-hover
        // ==============================================================

        $(".left-sidebar").hover(
          function () {
            $(".navbar-header").addClass("expand-logo");
          },
          function () {
            $(".navbar-header").removeClass("expand-logo");
          }
        );
        // this is for close icon when navigation open in mobile view
        $(".nav-toggler").on("click", function () {
          $("#main-wrapper").toggleClass("show-sidebar");
          $(".nav-toggler i").toggleClass("ti-menu");
        });
        $(".nav-lock").on("click", function () {
          $("body").toggleClass("lock-nav");
          $(".nav-lock i").toggleClass("mdi-toggle-switch-off");
          $("body, .page-wrapper").trigger("resize");
        });
        $(".search-box a, .search-box .app-search .srh-btn").on(
          "click",
          function () {
            $(".app-search").toggle(200);
            $(".app-search input").focus();
          }
        );

        // ==============================================================
        // Right sidebar options
        // ==============================================================
        $(function () {
          $(".service-panel-toggle").on("click", function () {
            $(".customizer").toggleClass("show-service-panel");
          });
          $(".page-wrapper").on("click", function () {
            $(".customizer").removeClass("show-service-panel");
          });
        });

        // ==============================================================
        // This is for the floating labels
        // ==============================================================
        $(".floating-labels .form-control")
          .on("focus blur", function (e) {
            $(this)
              .parents(".form-group")
              .toggleClass(
                "focused",
                e.type === "focus" || this.value.length > 0
              );
          })
          .trigger("blur");

        // ==============================================================
        //tooltip
        // ==============================================================
        $(function () {
          var tooltipTriggerList = [].slice.call(
            document.querySelectorAll('[data-bs-toggle="tooltip"]')
          );
          var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
            return new bootstrap.Tooltip(tooltipTriggerEl);
          });
        });
        // ==============================================================
        //Popover
        // ==============================================================
        $(function () {
          var popoverTriggerList = [].slice.call(
            document.querySelectorAll('[data-bs-toggle="popover"]')
          );
          var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
            return new bootstrap.Popover(popoverTriggerEl);
          });
        });

        // ==============================================================
        // Perfect scrollbar
        // ==============================================================
        $(".message-center, .customizer-body, .scrollable").perfectScrollbar({
          wheelPropagation: !0,
        });

        /*var ps = new PerfectScrollbar('.message-body');
          var ps = new PerfectScrollbar('.notifications');
          var ps = new PerfectScrollbar('.scroll-sidebar');
          var ps = new PerfectScrollbar('.customizer-body');*/

        // ==============================================================
        // Resize all elements
        // ==============================================================
        $("body, .page-wrapper").trigger("resize");
        $(".page-wrapper").delay(20).show();
        // ==============================================================
        // To do list
        // ==============================================================
        $(".list-task li label").click(function () {
          $(this).toggleClass("task-done");
        });
        // ==============================================================
        // Collapsable cards
        // ==============================================================
        $('a[data-action="collapse"]').on("click", function (e) {
          e.preventDefault();
          $(this)
            .closest(".card")
            .find('[data-action="collapse"] i')
            .toggleClass("ti-minus ti-plus");
          $(this).closest(".card").children(".card-body").collapse("toggle");
        });
        // Toggle fullscreen
        $('a[data-action="expand"]').on("click", function (e) {
          e.preventDefault();
          $(this)
            .closest(".card")
            .find('[data-action="expand"] i')
            .toggleClass("mdi-arrow-expand mdi-arrow-compress");
          $(this).closest(".card").toggleClass("card-fullscreen");
        });
        // Close Card
        $('a[data-action="close"]').on("click", function () {
          $(this).closest(".card").removeClass().slideUp("fast");
        });
        // ==============================================================
        // This is for mega menu
        // ==============================================================
        $(".mega-dropdown").on("click", function (e) {
          e.stopPropagation();
        });

        // ==============================================================
        // This is for the innerleft sidebar
        // ==============================================================
        $(".show-left-part").on("click", function () {
          $(".left-part").toggleClass("show-panel");
          $(".show-left-part").toggleClass("ti-menu");
        });

        // For Custom File Input
        $(".custom-file-input").on("change", function () {
          //get the file name
          var fileName = $(this).val();
          //replace the "Choose a file" label
          $(this).next(".custom-file-label").html(fileName);
        });

        $(".user_card").click(function () {
          $(".user-dd").animate({
            height: "toggle",
            opacity: "1",
          });
        });
        $(".alert_popup").click(function () {
          $("#notification_alert").animate({
            height: "toggle",
            opacity: "1",
          });
        });

        $(function () {
          var fixed_header = localStorage.getItem("fixed_header");
          var sidebar_position = localStorage.getItem("sidebar_position");
          var collapssidebar = localStorage.getItem("collapssidebar");
          var theme_view = localStorage.getItem("theme_view");
          var extended_menu = localStorage.getItem("extended_menu");
          
          if (fixed_header !== null) {
            $("input[name='header-position']").attr("checked", "checked");
            $("#main-wrapper").attr("data-header-position", "fixed");
          }

          if (sidebar_position !== null) {
            $("input[name='sidebar-position']").attr("checked", "checked");
            $("#main-wrapper").attr("data-sidebar-position", "fixed");
          }
          if (collapssidebar !== null) {
            $("input[name='collapssidebar']").attr("checked", "checked");
            $("#main-wrapper").attr("data-sidebartype", "full");
          }
          if (theme_view !== null) {
            $("input[name='theme-view']").attr("checked", "checked");
            $("body").attr("data-theme", "dark");
           
          }
          if (fixed_header !== null) {
            $("input[name='header-position']").attr("checked", "checked");
            $("#main-wrapper").attr("data-header-position", "fixed");
          }

          if (extended_menu !== null) {
            $("input[name='extended_menu']").attr("checked", "checked");
            $("#menuTestLemon2 .accordion-collapse").toggleClass("show");
          }
        });

        $("input[name='extended_menu']").click(function () {
          if ($(this).is(":checked")) {
            localStorage.setItem("extended_menu", 1);
          } else {
            localStorage.removeItem("extended_menu");
          }
        });
        $("input[name='header-position']").click(function () {
          if ($(this).is(":checked")) {
            localStorage.setItem("fixed_header", 1);
          } else {
            localStorage.removeItem("fixed_header");
          }
        });
        $("input[name='sidebar-position']").click(function () {
          if ($(this).is(":checked")) {
            localStorage.setItem("sidebar_position", 1);
          } else {
            localStorage.removeItem("sidebar_position");
          }
        });
        $("input[name='collapssidebar']").click(function () {
          if ($(this).is(":checked")) {
            localStorage.setItem("collapssidebar", 1);
          } else {
            localStorage.removeItem("collapssidebar");
          }
        });
        $("input[name='theme-view']").click(function () {
          if ($(this).is(":checked")) {
            localStorage.setItem("theme_view", 1);
          } else {
            localStorage.removeItem("theme_view");
          }
        });

      }); // end once foreach
    },
  };
})(jQuery, once, Drupal);

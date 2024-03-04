(function ($, once, Drupal) {
  Drupal.behaviors.customBehavior = {

    attach: function (context, settings) {
      "use strict";
      setTimeout(function () {
        once("customBehavior", "body", context).forEach(() => {

          $(".preloader").fadeOut();

          // ==============================================================
          // Theme options
          // ==============================================================

          $('.sidebartoggler').click(function () {
            var sidebarType = $('#main-wrapper').attr('data-sidebartype');
            var sidebarIcon = $('.sidebar-icon');
            $("#main-wrapper").toggleClass("mini-sidebar")
            if (sidebarType === 'mini-sidebar') {
              sidebarIcon.toggleClass('fa-circle-left fa-circle-right');
              localStorage.setItem("collapssidebar", 1);
              $('#main-wrapper').attr('data-sidebartype', 'full');

            } else if (sidebarType === 'full') {
              sidebarIcon.toggleClass('fa-circle-right fa-circle-left');
              localStorage.removeItem("collapssidebar");
              $('#main-wrapper').attr('data-sidebartype', 'mini-sidebar');
            }
          });
         
          $(document).ready(function () {

            
          // ==============================================================
          // Up to top button 
          // ==============================================================

          
          window.addEventListener('scroll', function(event) {
              // Vérifiez la position de défilement de la fenêtre
              if (window.scrollY > 0) {
                // Si vous faites défiler vers le bas, ajoutez la classe visible pour afficher la div
                upToTop.classList.add('visible');
            } else {
                // Si vous êtes en haut de la page, supprimez la classe visible pour cacher la div
                upToTop.classList.remove('visible');
            }
          });
            // Sélectionnez l'élément avec l'ID up_to_top
            var upToTop = document.getElementById('up_to_top');

            // Ajoutez un gestionnaire d'événements clic à cet élément
            upToTop.addEventListener('click', function (event) {
              // Empêchez le comportement par défaut du lien
              event.preventDefault();

              // Faites défiler la page jusqu'au haut
              window.scrollTo({
                top: 0,
                behavior: 'smooth' // Pour un défilement fluide, sinon utilisez 'auto' ou 'instant'
              });
            });

            // ==============================================================
            // hide notification block if cross is clicked and save it in localstorage
            // ==============================================================

            
            var notificationDiv = $('#notification_alert');
            var notificationStatus = localStorage.getItem('notificationStatus');
            
            if (notificationStatus == 'hidden') {
                notificationDiv.removeClass('show');
            } else {
                notificationDiv.addClass('show');
            }
            

            var closeButton = document.getElementById('notification_alert');

            // Ajouter un écouteur d'événement pour le click
            closeButton.addEventListener('click', function(event) {
                var notificationDiv = document.getElementById('notification_alert');
                if(event.target.id == "marks"){
                  notificationDiv.classList.remove('show');
                  localStorage.setItem('notificationStatus', 'hidden');
                }
            });

          // ==============================================================
          // sidebar-hover
          // ==============================================================

            var collapsesidebar = localStorage.getItem("collapssidebar");
            if (collapsesidebar == 1) {
              $(".left-sidebar").off("mouseenter mouseleave");
              $("#main-wrapper").addClass("mini-sidebar")
              $('#main-wrapper').attr('data-sidebartype', 'full');
              $('.sidebar-icon').toggleClass('fa-circle-left fa-circle-right');
              // return;
            }
            else {
              $("#main-wrapper").removeClass("mini-sidebar")
              $(".left-sidebar").hover(
                function () {
                  localStorage.setItem("collapssidebar", 1);
                  $(".navbar-header").addClass("expand-logo");
                  $("#main-wrapper").addClass("mini-sidebar")
                  $('#main-wrapper').attr('data-sidebartype', 'full');
                  $('.sidebar-icon').toggleClass('fa-circle-left fa-circle-right ');

                },
                function () {
                  localStorage.removeItem("collapssidebar");
                  $(".navbar-header").removeClass("expand-logo");
                  $("#main-wrapper").removeClass("mini-sidebar")
                  $('#main-wrapper').attr('data-sidebartype', 'mini-sidebar');
                  $('.sidebar-icon').toggleClass('fa-circle-right fa-circle-left');

                }
              );
            }

            $(".sidebartoggler").click(function () {
              var collapsesidebar = localStorage.getItem("collapssidebar");
              if (collapsesidebar == 1) {
                $(".left-sidebar").off("mouseenter mouseleave");

              }
              else {
                $(".left-sidebar").hover(
                  function () {

                    localStorage.setItem("collapssidebar", 1);
                    $(".navbar-header").addClass("expand-logo");
                    $("#main-wrapper").addClass("mini-sidebar")
                    $('#main-wrapper').attr('data-sidebartype', 'full');
                    $('.sidebar-icon').toggleClass('fa-circle-left fa-circle-right ');
                  },
                  function () {
                    localStorage.removeItem("collapssidebar");
                    $(".navbar-header").removeClass("expand-logo");
                    $("#main-wrapper").removeClass("mini-sidebar")
                    $('#main-wrapper').attr('data-sidebartype', 'mini-sidebar');
                    $('.sidebar-icon').toggleClass('fa-circle-right fa-circle-left');
                  }
                );
              }
            });

          });

          var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
          var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
            return new bootstrap.Tooltip(tooltipTriggerEl)
          })

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

          $("body, .page-wrapper").trigger("resize");
          $(".page-wrapper").delay(20).show();

          $(function () {

            var fixed_header = localStorage.getItem("fixed_header");
            var sidebar_position = localStorage.getItem("sidebar_position");
            var theme_view = localStorage.getItem("theme_view");

            if (fixed_header !== null) {
              $("input[name='header-position']").attr("checked", "checked");
              $("#main-wrapper").attr("data-header-position", "fixed");
            }

            if (sidebar_position !== null) {
              $("input[name='sidebar-position']").attr("checked", "checked");
              $("#main-wrapper").attr("data-sidebar-position", "fixed");
            }

            if (theme_view !== null) {
              $("input[name='theme-view']").attr("checked", "checked");
              $("body").attr("data-theme", "dark");

            }
            if (fixed_header !== null) {
              $("input[name='header-position']").attr("checked", "checked");
              $("#main-wrapper").attr("data-header-position", "fixed");
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

          $("input[name='theme-view']").click(function () {
            if ($(this).is(":checked")) {
              localStorage.setItem("theme_view", 1);
            } else {
              localStorage.removeItem("theme_view");
            }
          });
          // Vérifie s'il existe déjà une position sauvegardée dans localStorage
          const savedPosition = localStorage.getItem('savedPosition');
          const position = savedPosition ? JSON.parse(savedPosition) : { x: 0, y: 0 };
          $('.customizer').css('transform', `translate(${position.x}px, ${position.y}px)`);

          interact('.customizer').draggable({

            startAxis: 'y',
            lockAxis: 'y',
            listeners: {
              start(event) {
                console.log(event.type, event.target);
              },
              move(event) {
                position.x += event.dx;
                position.y += event.dy;

                event.target.style.transform = `translate(${position.x}px, ${position.y}px)`;

                // Sauvegarde la nouvelle position dans localStorage
                localStorage.setItem('savedPosition', JSON.stringify(position));
              },
            },
          });
        }, 1000); // 1000 millisecondes = 1 seconde
        
      }); // end once foreach
     
    },



  };
})(jQuery, once, Drupal);

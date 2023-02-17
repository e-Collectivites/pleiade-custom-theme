($.fn.AdminSettings = function (t) {
    var i = this.attr("id"),
      a =
        ((t = $.extend(
          {},
          {
            Theme: !0,
            LogoBg: "skin1",
            NavbarBg: "skin6",
            SidebarType: "full",
            SidebarColor: "skin1",
            HeaderPosition: !1,
            BoxedLayout: !1,
          },
          t
        )),
        {
          AdminSettingsInit: function () {
            
              a.ManageThemeLayout(),
              a.ManageThemeBackground(),
              a.ManageSidebarType(),
              a.ManageSidebarColor(),
              a.ManageBoxedLayout();
          },
          
          ManageThemeLayout: function () {
            switch (t.Layout) {
              case "horizontal":
                $("#" + i).attr("data-layout", "horizontal");
                var a = function () {
                  (0 < window.innerWidth
                    ? window.innerWidth
                    : this.screen.width) < 768
                    ? $(".scroll-sidebar").perfectScrollbar({})
                    : $(".scroll-sidebar").perfectScrollbar("destroy");
                };
                $(window).ready(a), $(window).on("resize", a);
                break;
              case "vertical":
                $("#" + i).attr("data-layout", "vertical"),
                  $(".scroll-sidebar").perfectScrollbar({});
            }
          },
          ManageThemeBackground: function () {
            var a, e;
            null != (a = t.LogoBg) && "" != a
              ? $("#" + i + " .topbar .top-navbar .navbar-header").attr(
                  "data-logobg",
                  a
                )
              : $("#" + i + " .topbar .top-navbar .navbar-header").attr(
                  "data-logobg",
                  "skin1"
                ),
              null != (e = t.NavbarBg) && "" != e
                ? ($("#" + i + " .topbar .navbar-collapse").attr(
                    "data-navbarbg",
                    e
                  ),
                  $("#" + i + " .topbar").attr("data-navbarbg", e),
                  $("#" + i).attr("data-navbarbg", e))
                : ($("#" + i + " .topbar .navbar-collapse").attr(
                    "data-navbarbg",
                    "skin1"
                  ),
                  $("#" + i + " .topbar").attr("data-navbarbg", "skin1"),
                  $("#" + i).attr("data-navbarbg", "skin1"));
          },
          ManageSidebarType: function () {

            $("#" + i).attr("data-sidebartype", "mini-sidebar"),
                $(".sidebartoggler").on("click", function () {
                $("#main-wrapper").toggleClass("mini-sidebar"),
                    $("#main-wrapper").hasClass("mini-sidebar")
                    ? ($(".sidebartoggler").prop("checked", !0),
                        $("#main-wrapper").attr("data-sidebartype", "full"))
                    : ($(".sidebartoggler").prop("checked", !1),
                        $("#main-wrapper").attr(
                        "data-sidebartype",
                        "mini-sidebar"
                        ));
                });
          },
          ManageSidebarColor: function () {
            var a;
            null != (a = t.SidebarColor) && "" != a
              ? $("#" + i + " .left-sidebar").attr("data-sidebarbg", a)
              : $("#" + i + " .left-sidebar").attr("data-sidebarbg", "skin1");
          },
          
          ManageBoxedLayout: function () {
            var a = t.BoxedLayout;
            switch (t.Layout) {
              case "vertical":
              case "horizontal":
                1 == a
                  ? ($("#" + i).attr("data-boxed-layout", "boxed"),
                    $("#boxed-layout").prop("checked", !0))
                  : ($("#" + i).attr("data-boxed-layout", "full"),
                    $("#boxed-layout").prop("checked", !1));
            }
          },
        });
    a.AdminSettingsInit();
  })
    
  
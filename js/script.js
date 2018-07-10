$(function() {
  var $menu = $("nav");
  var $menuIcon = $("#menuIcon");
  var $menuIconDiv = $(".menu-icon");

  $menuIcon.click(function() {
    if ($menu.css("display") == "block") {
      $menu.css("display", "none");
      $menu.attr("data-state", "off");
    } else {
      $menu.css("display", "block");
      $menu.attr("data-state", "on");
    }
  });

  $(window).resize(function() {
    var windowWidth = window.innerWidth;

    if (
      $menuIcon.css("display") == "block" &&
      $menu.attr("data-state") == "on" &&
      windowWidth < 768
    ) {
      $menu.css("display", "block");
    }
    if (windowWidth > 768) {
      $menu.css("display", "block");
    }
  });
  var $projectsMenu = $("#menuProjects");
  var $projectsMenuIcon = $("#projectsMenuIcon");
  $projectsMenuIcon.click(function() {
    if ($projectsMenu.css("display") == "none") {
      $projectsMenu.css("display", "block");
      $projectsMenuIcon.css({
        "-webkit-transform": "rotate(180deg)",
        "-moz-transform": "rotate(180deg)",
        "-ms-transform": "rotate(180deg)",
        "-o-transform": "rotate(180deg)",
        transform: "rotate(180deg)"
      });
    } else {
      $projectsMenu.css("display", "none");
      $projectsMenuIcon.css({
        "-webkit-transform": "rotate(0deg)",
        "-moz-transform": "rotate(0deg)",
        "-ms-transform": "rotate(0deg)",
        "-o-transform": "rotate(0deg)",
        transform: "rotate(0deg)"
      });
    }
  });
  $(".go-up").on("click", function() {
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
  });
});

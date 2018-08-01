$(function() {
  const $col3 = $(".col-3");
  $("#all").click(function() {
    $col3
      .filter(function() {
        return $(this).data("group") !== "";
      })
      .css({ display: "initial" });
  });

  $("#photos").click(function() {
    $col3
      .filter(function() {
        return $(this).data("group") === "photos";
      })
      .css({ display: "initial" });
    $col3
      .filter(function() {
        return $(this).data("group") !== "photos";
      })
      .css({ display: "none" });
  });

  $("#banding").click(function() {
    $col3
      .filter(function() {
        return $(this).data("group") === "banding";
      })
      .css({ display: "initial" });
    $col3
      .filter(function() {
        return $(this).data("group") !== "banding";
      })
      .css({ display: "none" });
  });

  $("#adverts").click(function() {
    $col3
      .filter(function() {
        return $(this).data("group") === "adverts";
      })
      .css({ display: "initial" });
    $col3
      .filter(function() {
        return $(this).data("group") !== "adverts";
      })
      .css({ display: "none" });
  });

  $("#development").click(function() {
    $col3
      .filter(function() {
        return $(this).data("group") === "development";
      })
      .css({ display: "initial" });
    $col3
      .filter(function() {
        return $(this).data("group") !== "development";
      })
      .css({ display: "none" });
  });

  $("#misc").click(function() {
    $col3
      .filter(function() {
        return $(this).data("group") === "misc";
      })
      .css({ display: "initial" });
    $col3
      .filter(function() {
        return $(this).data("group") !== "misc";
      })
      .css({ display: "none" });
  });
});

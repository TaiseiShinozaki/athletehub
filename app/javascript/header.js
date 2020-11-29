$(function () {
  $(document).on("mouseover", "a.new-post", function () {
    $(this).css({ "color": "blue" });
  }).on("mouseout", "a.new-post", function () {
    $(this).css({ "color": "" });
  })
});

$(function () {
  $(document).on("mouseover", "a.login", function () {
    $(this).css({ "color": "blue" });
  }).on("mouseout", "a.login", function () {
    $(this).css({ "color": "" });
  })
});

$(function () {
  $(document).on("mouseover", "a.logout", function () {
    $(this).css({ "color": "blue" });
  }).on("mouseout", "a.logout", function () {
    $(this).css({ "color": "" });
  })
});

$(function () {
  $(document).on("mouseover", "a.sign-up", function () {
    $(this).css({ "color": "blue" });
  }).on("mouseout", "a.sign-up", function () {
    $(this).css({ "color": "" });
  })
});
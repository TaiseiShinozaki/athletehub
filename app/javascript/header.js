$(function () {
  $(document).on("mouseover", "a.new-post", function () {
    $(this).css({ "color": "gray" });
  }).on("mouseout", "a.new-post", function () {
    $(this).css({ "color": "" });
  })
});

$(function () {
  $(document).on("mouseover", "a.login", function () {
    $(this).css({ "color": "gray" });
  }).on("mouseout", "a.login", function () {
    $(this).css({ "color": "" });
  })
});

$(function () {
  $(document).on("mouseover", "a.logout", function () {
    $(this).css({ "color": "gray" });
  }).on("mouseout", "a.logout", function () {
    $(this).css({ "color": "" });
  })
});

$(function () {
  $(document).on("mouseover", "a.sign-up", function () {
    $(this).css({ "color": "gray" });
  }).on("mouseout", "a.sign-up", function () {
    $(this).css({ "color": "" });
  })
});
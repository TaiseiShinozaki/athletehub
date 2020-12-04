$(function () {
  $(document).on("mouseover", "a#content-title", function () {
    $(this).css({ "color": "blue" });
  }).on("mouseout", "a#content-title", function () {
    $(this).css({ "color": "" });
  })
});

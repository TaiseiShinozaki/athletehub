$(function () {
  $(document).on("mouseover", "a#content-title", function () {
    $(this).css({ "color": "gray" });
  }).on("mouseout", "a#content-title", function () {
    $(this).css({ "color": "" });
  })
});

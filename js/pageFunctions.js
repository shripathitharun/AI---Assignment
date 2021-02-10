$("#menu-toggler").on("click", () => {
  if ($("#menu").css("display") == "none") {
    $("#menu").show(200);
  } else {
    $("#menu").hide(200);
  }
});

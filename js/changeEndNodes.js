$(() => {
  $("#changeEndNodes").on("click", () => {
    $("#changeEndNodes").addClass("green");
    let a = $(".start").attr("id");
    let b = $(".end").attr("id");
    $(`#${a}`).removeClass("start");
    $(`#${b}`).removeClass("end");
    let i = 1;
    $(".cell").on("click", (e) => {
      console.log(e.target.id);
      if (i == 1) {
        --i;
        $("#" + e.target.id).addClass("start");
        $("#" + e.target.id).removeClass("obstacle");
      } else if (i == 0) {
        --i;
        $("#" + e.target.id).addClass("end");
        $("#" + e.target.id).removeClass("obstacle");
        $("#changeEndNodes").removeClass("green");
      }
    });
  });
});

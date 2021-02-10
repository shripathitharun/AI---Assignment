function constructGrid(a, b) {
  console.log(a, b);
  $(".grid").empty();
  for (let i = 0; i < a; i++) {
    $(".grid").append(`<div id="row${i}" class="gridRow"></div>`);
    for (let j = 0; j < b; j++) {
      $(`#row${i}`).append(`<div id="cell-${i}-${j}" class="cell"></div>`);
    }
  }

  let start_a = Math.floor(Math.random() * a);
  let start_b = Math.floor(Math.random() * b);
  let end_a = Math.floor(Math.random() * a);
  let end_b = Math.floor(Math.random() * b);
  // console.log(start_a, start_b);
  $(`#cell-${start_a}-${start_b}`).addClass("start");
  $(`#cell-${end_a}-${end_b}`).addClass("end");
}

$(() => {
  constructGrid(10, 15);
  $("#resetGrid").on("click", () => {
    $(".grid").removeClass("stopInteractions");
    let a = $("#rows").val();
    let b = $("#columns").val();
    constructGrid(a, b);
    allowobstacles();
  });
  allowobstacles();
});

function allowobstacles() {
  $(".cell").on("click", (e) => {
    $("#" + e.target.id).toggleClass("obstacle");
  });
}

// function traverse(node) {
//   let numArr = node.substring(5).split("-");

//   let nodeUp = `cell-${parseInt(numArr[0]) - 1}-${parseInt(numArr[1]) - 0}`;
//   $("#" + nodeUp).addClass("visited");
//   if (parseInt(numArr[0]) > 0) traverse(nodeUp);
//   else return;

//   let nodeLeft = `cell-${parseInt(numArr[0]) - 0}-${parseInt(numArr[1]) - 1}`;
//   $("#" + nodeLeft).addClass("visited");
//   console.log(nodeLeft);
//   if (parseInt(numArr[1]) > 0) traverse(nodeLeft);
//   else return;

//   let nodeRight = `cell-${parseInt(numArr[0]) + 0}-${parseInt(numArr[1]) + 1}`;
//   $("#" + nodeRight).addClass("visited");
//   console.log(nodeRight);
//   if (parseInt(numArr[1]) < $("#columns").val()) traverse(nodeRight);
//   else return;

//   let nodeDown = `cell-${parseInt(numArr[0]) + 1}-${parseInt(numArr[1]) + 0}`;
//   $("#" + nodeDown).addClass("visited");
//   if (parseInt(numArr[0]) < $("#rows").val()) traverse(nodeDown);
//   else return;
// }

function traverse(startNode, endNode) {
  let numArrStart = startNode.substring(5).split("-");
  let startPos = {
    row: parseInt(numArrStart[0]),
    col: parseInt(numArrStart[1]),
  };
  let queue = [];
  queue.push(startPos);
  let parentForCell = {};

  while (queue.length > 0) {
    let { row, col } = queue.shift();
    if (`cell-${row}-${col}` === endNode) {
      break;
    }
    let neighbours = [
      { row: row - 1, col: col },
      { row: row, col: col + 1 },
      { row: row + 1, col: col },
      { row: row, col: col - 1 },
    ];
    for (let i = 0; i < neighbours.length; ++i) {
      let nRow = neighbours[i].row;
      let nCol = neighbours[i].col;

      if (nRow < 0 || nRow > $("#rows").val() - 1) {
        continue;
      }
      if (nCol < 0 || nCol > $("#columns").val() - 1) {
        continue;
      }
      if ($(`#cell-${nRow}-${nCol}`).hasClass("obstacle")) {
        continue;
      }

      let cell = `cell-${nRow}-${nCol}`;
      if ($("#" + cell).hasClass("visited")) {
        continue;
      }
      parentForCell[cell] = {
        key: `cell-${row}-${col}`,
      };

      $("#" + cell).addClass("visited");
      queue.push(neighbours[i]);
    }
    // console.log(queue);
  }
  let path = [];
  let current = endNode;

  while (current !== startNode) {
    path.push(current);
    current = parentForCell[current].key;
  }
  path.forEach((element) => {
    $("#" + element).addClass("path");
  });
}

$(() => {
  $("#startAlgorithm").on("click", () => {
    $(".grid").addClass("stopInteractions");
    let startNode = $(".start").attr("id");
    let endNode = $(".end").attr("id");
    traverse(startNode, endNode);
  });
});

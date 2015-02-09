var queenAttack = function(startingCoordinates, endingCoordinates) {

  var xdiff = Math.abs(startingCoordinates[0] - endingCoordinates[0]);
  var ydiff = Math.abs(startingCoordinates[1] - endingCoordinates[1]);

  if (startingCoordinates[0] === endingCoordinates[0] || startingCoordinates[1] === endingCoordinates[1] || xdiff === ydiff) {
    return true;
  } else {
    return false;
  }

};


$(document).ready(function() {

  $("form#ourForm").submit(function(event) {

    var startingCoordinates = $("input#startingCoordinates").val().split(",").map(Number);
    var endingCoordinates = $("input#endingCoordinates").val().split(",").map(Number);

    if (!queenAttack(startingCoordinates, endingCoordinates)) {
      $(".not").text("not");
    } else {
      $(".not").text("");
    }

    $("#result").show();
    event.preventDefault();
  });
});

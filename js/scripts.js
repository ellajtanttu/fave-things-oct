//Business Logic:


//UI Logic:
$(document).ready(function() {
  $("#faves").submit(function(event) {
    event.preventDefault();
    let faveThings = [];
    const faveColor = faveThings.push($("#input1").val());
    const faveMovie = faveThings.push($("#input2").val());
    const faveFood = faveThings.push($("#input3").val());
    $("#output").show();
    $("ul").append("<li>" + faveThings + "</li>");
  });
});
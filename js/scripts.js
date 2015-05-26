var triangles = function(a,b,c) {
  var triangle = []
  triangle.push(a, b, c)
  triangle.sort

  if (triangle[0] + triangle[1] <= triangle[2]){
    return false;
  } else if ( triangle[0] === triangle[1] && triangle[1] === triangle[2]) {
    return "equilateral";
  } else if ( triangle[0] === triangle[1] && triangle[2] !== triangle[1]) {
    return "isosceles";
  } else {
  return "scalene";
  }
};

$(document).ready(function() {
  $("form#triangle").submit(function(event) {
    $(".triangle").empty()

    var a = parseInt($("input#a").val());
    var b = parseInt($("input#b").val());
    var c = parseInt($("input#c").val());
    var result = triangles(a,b,c);

    $(".a").text(a);
    $(".b").text(b);
    $(".c").text(c);

    if(!result) {
      $(".triangle").text("physically impossible");
    } else {
      $(".triangle").text(result);
    }

    $("#result").show();
    event.preventDefault();

  });
});

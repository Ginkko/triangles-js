var triangles = function(a,b,c) {
  var triangle = []
  triangle.push(a, b, c)
  triangle.sort

  if ( triangle[0] === triangle[1] && triangle[1] === triangle[2]) {
    return "equilateral";
  } else if ( triangle[0] === triangle[1] && triangle[2] !== triangle[1]) {
    return "scalene";
  } else {
  return false;
  }
};

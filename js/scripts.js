var triangles = function(a,b,c) {
  var triangle = []
  triangle.push(a, b, c)
  triangle.sort

debugger;

  if ( triangle[0] === triangle[1] && triangle[1] === triangle[2]) {
    return "equilateral";
  } else {
  return false;
  }
};

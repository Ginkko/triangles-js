describe ('triangles', function() {
  it("will return false if it is not a valid triangles", function() {
    expect(triangles(1,2,8)).to.equal(false);
  });

  it("will return equilateral if the triangle is equilateral", function(){
    expect(triangles(3,3,3)).to.equal("equilateral");
  });

  it("will return isosceles if the triangle is isosceles", function () {
    expect(triangles(2,2,3)).to.equal("isosceles");
  });

   it("will return scalene if triangle is scalene", function() {
     expect(triangles(2,3,4)).to.equal("scalene");
   });
});

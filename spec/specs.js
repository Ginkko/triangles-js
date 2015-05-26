describe ('triangles', function() {
  it("will return false if it is not a valid triangles", function() {
    expect(triangles(1,1,8)).to.equal(false);
  });

  it("will return equilateral if the triangle is equilateral", function(){
    expect(triangles(3,3,3)).to.equal("equilateral");
  });
});

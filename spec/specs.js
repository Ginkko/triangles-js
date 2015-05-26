describe ('triangles', function() {
  it("will return false if it is not a valid triangles", function() {
    expect(triangles(1,1,8)).to.equal(false);
  });
});

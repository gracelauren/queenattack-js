describe('queenAttack', function() {
  it('is false if the coordinates are not horizontally, vertically, or diagonally in line with each other', function() {
    expect(queenAttack([1, 1], [2, 3])).to.equal(false);
  });

  it('is true if the coordinates are in a vertical line with each other', function() {
    expect(queenAttack([2,4],[2,6])).to.equal(true);
  });

  it('is true if the coordinates are in a horizontal line with each other', function() {
    expect(queenAttack([1,3],[5,3])).to.equal(true);
  });

  it('is true if the coordinates are in a diagonal line with each other', function() {
    expect(queenAttack([1,2],[2,3])).to.equal(true);
  });

});

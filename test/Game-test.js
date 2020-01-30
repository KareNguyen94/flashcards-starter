const chai = require('chai');
const expect = chai.expect;
const Game = require('../src/Game');
const Round = require('../src/Round');

describe('Game', function() {

  it('should be able to keep track of current round', function() {
    const game = new Game();
    expect(game.currentRound).to.equal(null);
  });

  it('should be able to start the game', function() {
    const game = new Game();
    expect(game.currentRound).to.equal(null);
    game.startGame();
    expect(game.currentRound).to.be.an.instanceOf(Round);
  });
});
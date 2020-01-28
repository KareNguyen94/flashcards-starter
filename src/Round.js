const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck.cards
    this.turnCount = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    return this.deck[0];
  }

  takeTurn(guess) {
    const turn = new Turn(guess, this.returnCurrentCard());
    this.turnCount++;
  }
}

  module.exports = Round;

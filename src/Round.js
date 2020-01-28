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
    const playerGuess = turn.evaluateGuess();
    if(playerGuess === false) {
      this.incorrectGuesses.push(this.deck[0].id);
      this.deck.shift();
    } else {
      this.deck.shift();
    }
    return turn.giveFeedback();
  }

  calculatePercentCorrect() {
   const score = ((this.turnCount - this.incorrectGuesses.length) / this.turnCount * 100);
   return Math.round(score);
  }

  endRound() {
    if(this.deck.length === 0) {
      console.log(`** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!!`);
      
      return `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!!`;
    }
  }
}

  module.exports = Round;

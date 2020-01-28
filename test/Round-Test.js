const chai = require('chai');
const expect = chai.expect;
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const Card = require('../src/Card');

describe('Round', function() {

  let card1, card2, card3;
  let deck;
  let round;

  beforeEach(() => {

    card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    deck = new Deck([card1, card2, card3]);
    round = new Round(deck)
  });

  it('should be a function', function() {
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', function() {
    expect(round).to.be.an.instanceof(Round);
  });

  it('should be able to hold a deck', function() {
    expect(round.deck).to.deep.equal(deck.cards);
    });

  it('should be able return back a card', function() {
    expect(round.returnCurrentCard()).to.deep.equal(card1);
    });

  it('should be able to increase the number of turns', function() {
    round.takeTurn('pug');
    expect(round.turnCount).to.equal(1);
    });
    
  describe('validate get feedback', function() {
    
    it('should say if guess is correct', function() {
      round.takeTurn();
      expect(round.takeTurn('gallbladder')).to.equal('Correct!');
    });
    
    it('should say if guess is incorrect', function() {
      round.takeTurn();
      expect(round.takeTurn('Lex')).to.equal('Incorrect!');
    });
  });
  it('should store the incorrect guesses', function() {
    round.takeTurn();
    round.takeTurn();
    expect(round.incorrectGuesses.length).to.deep.equal(2)
  });

  it('should remove a card after a turn', function() {
    round.takeTurn('pug');
    expect(round.returnCurrentCard()).to.equal(card2);
    });

  it('should calculate all of the correct answers', function() {
    round.takeTurn('sea otter');
    round.takeTurn('appendix');
    round.takeTurn('Fitzgerald');
    expect(round.calculatePercentCorrect()).to.equal(67);
    });
  
});
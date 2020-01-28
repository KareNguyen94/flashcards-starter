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
});
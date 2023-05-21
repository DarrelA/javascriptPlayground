// ************************************************************************************************** //

// **********************************
// WRITING EVERYTHING USING FUNCTIONS
// **********************************

/*
function initializeDeck() {
  const deck = [];
  const suits = ['hearts', 'diamonds', 'spades', 'clubs'];
  const values = '2,3,4,5,6,7,8,9,10,J,Q,K,A';
  for (let value of values.split(',')) {
    for (let suit of suits) {
      deck.push({ value, suit });
    }
  }
  return deck;
}

function drawCard(deck, drawnCards) {
  const card = deck.pop();
  drawnCards.push(card);
  return card;
}

function drawMultiple(numCards, deck, drawnCards) {
  const cards = [];
  for (let i = 0; i < numCards; i++) {
    cards.push(drawCard(deck, drawnCards));
  }
  return cards;
}

function shuffle(deck) {
  // loop over array backwards
  for (let i = deck.length - 1; i > 0; i--) {
    //pick random index before current element
    let j = Math.floor(Math.random() * (i + 1));
    //swap
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
  return deck;
}

// We have to create a bunch of variables:
const firstDeck = initializeDeck();
const drawnCards = [];
shuffle(firstDeck);
// We have to pass a ton of arguments around:
const hand1 = drawMultiple(2, firstDeck, drawnCards);
const hand2 = drawMultiple(2, firstDeck, drawnCards);
const pokerHand = drawMultiple(5, firstDeck, drawnCards);
*/

// ************************************************************************************************** //

// **********************************
// USING AN OBJECT + METHODS INSTEAD:
// **********************************

// Reusable without class.
const makeDeck = () => {
  return {
    deck: [],
    drawnCards: [],
    suits: ['hearts', 'diamonds', 'spades', 'clubs'],
    values: '2,3,4,5,6,7,8,9,10,J,Q,K,A',
    initializeDeck() {
      const { suits, values, deck } = this;
      for (let value of values.split(',')) {
        for (let suit of suits) {
          deck.push({ value, suit });
        }
      }
      return 'Deck created!';
    },

    drawCard() {
      const card = this.deck.pop();
      this.drawnCards.push(card);
      return card;
    },

    drawMultiple(numCards) {
      const cards = [];
      for (let i = 0; i < numCards; i++) {
        cards.push(this.drawCard());
      }
      return cards;
    },

    // Fisher–Yates shuffle Algorithm
    shuffle() {
      const { deck } = this;
      // loop over array backwards
      for (let i = deck.length - 1; i > 0; i--) {
        //pick random index before current element
        let j = Math.floor(Math.random() * (i + 1));
        //swap
        [deck[i], deck[j]] = [deck[j], deck[i]];
      }
      return 'Shuffled!';
    },
  };
};

const deck1 = makeDeck();
const deck2 = makeDeck();
console.log('First', deck1.initializeDeck());
console.log('Second', deck2.initializeDeck());
console.log('deck1:', deck1.deck);
console.log('deck2 is', deck2.shuffle());
console.log('deck2:', deck2.deck);

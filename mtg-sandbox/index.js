'use strict';

const mtg = require('mtgsdk');
const https = require('https');

// mtg.card.find(3)
// .then( result => {
//   console.log( result.card.name); //Black Lotus
// });
//
// mtg.card.where({ supertypes: 'legendary', subtypes: 'goblin' })
// .then(cards => {
//     console.log(cards[0]) // "Zada, Hedron Grinder"
//     for(card in cards) {
//       console.log(cards[card].name);
//     };
// });

https.get('https://api.magicthegathering.io/v1/cards', function(res) {
  // if (err) console.error(err.message);
  let cards = res.body;
  console.log(res.body);
  for (card in cards) {
    console.log(cards[card].name);
  };
});

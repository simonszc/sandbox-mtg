'use strict';

const mtg = require('mtgsdk');
const https = require('https');

mtg.card.find(3)
.then( result => {
  console.log( result.card.name); //Black Lotus
});

mtg.card.where({ supertypes: 'legendary', subtypes: 'goblin' })
.then(cards => {
    console.log(cards[0]) // "Zada, Hedron Grinder"
    for(var card in cards) {
      console.log(cards[card].name);
    };
});

const getAll = function() {
  https.get('https://api.magicthegathering.io/v1/cards', (res) => {
    console.log('statusCode:', res.statusCode);
    console.log('headers:', res.headers);

    let cards = '';
    res.on('data', (d) => {
      cards += d;
    });

    res.on('end', () => {
      cards = JSON.parse(cards).cards;
      for(var card in cards) {
        console.log(cards[card].name);
      };
    })

  }).on('error', (e) => {
    console.error(e);
  });
};

getAll();

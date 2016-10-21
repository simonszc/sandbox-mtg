'use strict';

const mtg = require('mtgsdk');
// const https = require('https');
// const Promise = require('bluebird');

const getContentProm = require('./lib/get-prom-content');

// mtg.card.find(3)
// .then( result => {
//   console.log( result.card.name); //Black Lotus
// });
//
// mtg.card.where({ supertypes: 'legendary', subtypes: 'goblin' })
// .then(cards => {
//     console.log(cards[0]) // "Zada, Hedron Grinder"
//     for(var card in cards) {
//       console.log(cards[card]);
//     };
// });

const getAllProm = function() {
  let url = `https://api.magicthegathering.io/v1/cards`;
  getContentProm(url)
  .then(cards => {
    cards = JSON.parse(cards).cards;
    for (var index in cards) {
      console.log(cards[index].name);
    };
  })
  .catch(err => console.error(err.message));
};

getAllProm();

const generateBoosterProm = function(setCode) {
  let url = `https://api.magicthegathering.io/v1/sets/${setCode}/booster`
  getContentProm(url)
  .then(cards => {
    cards = JSON.parse(cards).cards;
    for(var index in cards) {
      console.log(cards[index].name);
    };
  })
  .catch(err => console.error(err.message));
};

generateBoosterProm('kld');

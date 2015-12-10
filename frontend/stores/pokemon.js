var Store = require('flux/utils').Store;
var Dispatcher = require('../dispatcher/dispatcher');

var PokemonStore = new Store(Dispatcher);

var _pokemons = {};

PokemonStore.all = function (payload) {
  return _pokemons.slice();
};

var Store = require('flux/utils').Store;
var Dispatcher = require('../dispatcher/dispatcher');

var PokemonStore = new Store(Dispatcher);

var _pokemons = {};

window.PokemonStore = PokemonStore;

PokemonStore.all = function () {
  var pokes = [];

  Object.keys(_pokemons).map(function (id) {
    pokes.push(_pokemons[id]);
  });

  return pokes;
};

PokemonStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case "POKEMONS_RECEIVED":
      resetPokemons(payload.pokemons);
      PokemonStore.__emitChange();
      break;
  }
};

var resetPokemons = function(pokemons) {
  _pokemons = {};

  pokemons.forEach(function(pokemon) {
    _pokemons[pokemon["id"]] = pokemon;
  });

};

module.exports = PokemonStore;

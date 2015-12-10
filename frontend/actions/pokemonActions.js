var Dispatcher = require('../dispatcher/dispatcher.js');
var CONSTANTS = require('../constants/pokemonConstants.js');

var ApiActions = {
  receiveAllPokemons: function(pokemons) {
    Dispatcher.dispatch({
      actionType: CONSTANTS.POKEMONS_RECEIVED,
      pokemons: pokemons
    });
  }
};

module.exports = ApiActions;

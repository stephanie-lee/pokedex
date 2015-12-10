var ApiActions = "../actions/pokemonActions.js";

var Pokemons = {
  fetchAllPokemon: function(){
    $.ajax({
      url: "api/pokemon",
      type: "GET",
      success: function(pokemons){
        ApiActions.receiveAllPokemons(pokemons);
      }
    });
  }
};

module.exports = Pokemons;

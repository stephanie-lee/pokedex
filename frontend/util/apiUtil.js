var Pokemon = {
  fetchAllPokemon: function(){
    $.ajax({
      url: "api/pokemon",
      type: "GET",
      success: function(pokemon){
        console.log(pokemon);
      }
    });
  }
};

module.exports = Pokemon;

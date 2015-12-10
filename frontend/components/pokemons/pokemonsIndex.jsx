var React = require('react');
var PokemonStore = require('../../stores/pokemon.js');
var Pokemons = require('../../util/apiUtil.js');
var PokemonIndexItem= require('./pokemonIndexItem.jsx');

var PokemonsIndex = React.createClass({
  getInitialState: function(){
    return ({pokemons: PokemonStore.all()});
  },

  componentDidMount: function(){
    PokemonStore.addListener(this._onChange);
    Pokemons.fetchAllPokemon();
  },

  componentWillUnmount: function(){
    PokemonStore.removeListener(this._onChange);
  },

  _onChange: function() {
    this.setState({pokemons: PokemonStore.all()});
  },

  render: function() {
    var pokemon = this.state.pokemons.map(function(poke, idx) {
        return (<PokemonIndexItem key={idx} pokemon={poke}/>);
    });

    return(
      <div>
        <ul>
          {pokemon}
        </ul>
      </div>
    );
  }
});


module.exports = PokemonsIndex;

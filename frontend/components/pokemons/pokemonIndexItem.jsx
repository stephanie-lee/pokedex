var React = require('react');
var PokemonStore = require('../../stores/pokemon.js');
// var PokemonsIndex = require('./pokemonIndex.jsx');
var History = require('react-router').History;

var PokemonIndexItem = React.createClass({
  mixins: [History],
  handleClick: function() {
    var pokeUrl = "pokemon/" + this.props.pokemon.id;
    this.history.push(pokeUrl);
  },

  render: function() {
    return (
      <li className="poke-list-item" onClick={this.handleClick}>
        Name: {this.props.pokemon.name}
        Type: {this.props.pokemon.poke_type}
      </li>
    );
  }
});


module.exports = PokemonIndexItem;

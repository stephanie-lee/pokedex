var React = require('react');
var PokemonStore = require('../stores/pokemon.js');

var PokemonDetail = React.createClass({
  getInitialState: function() {
    return ({pokemon: this.getStateFromStore()});
  },

  getStateFromStore: function() {
    var thisId = parseInt(this.props.params.pokemonId);
    return PokemonStore.find(thisId) || {};
  },

  componentDidMount: function(){
    PokemonStore.addListener(this._onChange);
  },

  componentWillUnmount: function(){
    PokemonStore.removeListener(this._onChange);
  },

  componentWillReceiveProps: function(newProps) {
    var pokemonId = parseInt(newProps.params.pokemonId);
    this.setState({pokemon: PokemonStore.find(pokemonId)});
  },

  _onChange: function() {
    this.setState({pokemon: this.getStateFromStore()});
  },

  render: function() {
    return (
      <div>
        <div className="pokemon-detail-pane">
          <div className="detail">
            Name: {this.state.pokemon.name} <br/>
            Attack: {this.state.pokemon.attack} <br/>
            Defense: {this.state.pokemon.defense} <br/>
            Poke-Type: {this.state.pokemon.poke_type} <br/>
            <img src={this.state.pokemon.image_url} />
          </div>
        </div>
      </div>
    );
  }
});

module.exports = PokemonDetail;

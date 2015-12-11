var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;
var Route = require('react-router').Route;

var PokemonStore = require('./stores/pokemon.js');
var PokemonsIndex = require('./components/pokemons/pokemonsIndex.jsx');
var PokemonDetail = require('./components/pokemonDetail.jsx');
var App = require('./components/app.jsx');

var routes = (
  <Route path="/" component={App}>
    <Route path="pokemon/:pokemonId" component={PokemonDetail}>
    </Route>
  </Route>
);

document.addEventListener("DOMContentLoaded", function() {
  var root = document.getElementById('root');
  ReactDOM.render(<Router>{routes}</Router>, root);
});

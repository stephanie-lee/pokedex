var React = require('react');
var ReactDOM = require('react-dom');
var PokemonsIndex = require('./components/pokemons/pokemonsIndex.jsx');
var Router = require('react-router').Router;
var Route = require('react-router').Route;

var PokemonStore = require('./stores/pokemon.js');

var routes = (
  <Route path="/" components={App}>
  </Route>
)

document.addEventListener("DOMContentLoaded", function() {
  var root = document.getElementById('root');
  ReactDOM.render(<Router>{routes}</Router>, root);
});

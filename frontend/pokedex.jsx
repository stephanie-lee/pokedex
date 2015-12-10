var React = require('react');
var ReactDOM = require('react-dom');
var Pokemon = require('./util/apiUtil.js');

document.addEventListener("DOMContentLoaded", function() {
    ReactDOM.render(<h1>Greetings, poke-friend!</h1>, root);
    Pokemon.fetchAllPokemon();
});

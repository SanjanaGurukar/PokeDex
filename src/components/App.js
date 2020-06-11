import React, { Component } from 'react';
import './styles/App.css';
import PokemonList from './PokemonList';
import DisplayComponent from './DisplayComponent'
import Pokemon from '../Pokemon';

class App extends Component {
  constructor() {
    super();
    this.state = {
      pokemon: {}
    };
    this.handleOnClick = this.handleOnClick.bind(this);
    this.deletePokemon = this.deletePokemon.bind(this);
  }

  handleOnClick(id) {
    fetch(`http://pokeapi.co/api/v2/pokemon/${id}/`)
      .then(res => res.json())
      .then(data => {
        const pokemon = new Pokemon(data);

        this.setState({ pokemon });
      })
      .catch(error => console.log(error));
  }

  deletePokemon(id) {
        const pokemon = {}
        this.setState({ pokemon });
  }

  render() {
    return (
      <div className="main">
      <h1 className="header">Pokedex App</h1>
      <div className="App">
        <PokemonList handleOnClick={this.handleOnClick} deletePokemon={this.deletePokemon}/>
        <DisplayComponent pokemon={this.state.pokemon}/>
      </div>
      </div>
    );
  }
}


export default App;
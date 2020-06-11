import React from 'react';
import './styles/PokemonList.css';
import PokemonGrid from './PokemonGrid';
import { pokemonData } from '../PokemonData';

const PokemonList = ({handleOnClick,deletePokemon} ) => {
    const grids = pokemonData.map(data => {
      return (
        <PokemonGrid 
          key={data.id} 
          data={data} 
          handleOnClick={handleOnClick}
          deletePokemon={deletePokemon}
        />
      );
    });
  
    return (
      <section className="pokemon-list">
          {grids}
      </section>
    )
  }

export default PokemonList;
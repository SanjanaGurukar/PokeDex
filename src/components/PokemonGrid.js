import React from 'react';
import './styles/PokemonGrid.css';
import images from '../images/images.png'

const PokemonGrid = ({ data, handleOnClick, deletePokemon}) => {
    const { id, backgroundPosition } = data;
    const imageStyle = { backgroundImage: `url(${images})`, backgroundPosition };

    return (
      <React.Fragment>
        <button style={imageStyle} onClick={() => handleOnClick(id)} className="pokemon-grid"></button>
        <button className="button" onClick={()=>deletePokemon(id)}>Delete</button>
    </React.Fragment>
    )
  };

export default PokemonGrid;
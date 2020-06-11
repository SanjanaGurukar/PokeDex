import React from 'react';
import './styles/DisplayComponent.css';

const DisplayComponent = ({pokemon}) => {
    const { name, type, hp_stat, attack_stat, defense_stat } = pokemon;


  return (
    <React.Fragment>
    <section className="display">
        <p className="instructions">*Click on any of the Pokemon to add its details below.<br></br>
        *After adding, Click on delete button to remove the Pokemon details</p>
      <div className='classMain'>
        <h1 className='name'>Name: {name}</h1>
        <p className="para">HP Statistics: {hp_stat}</p>
        <p className="para">Attack Statistics: {attack_stat}</p>
        <p className="para">Defense Statistics: {defense_stat}</p>
        <p className="para">Type: {type}</p>
      </div>
    </section>
    </React.Fragment>
  )
}

export default DisplayComponent;
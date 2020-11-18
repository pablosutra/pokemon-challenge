import React from 'react';
import pokeball from '../../assets/pokeBall.png';
export const NoSelection = () => (
    <div className="pokemon-information-container-no-selection">
        <img src={pokeball} alt="pokeball" className="pokemon-information-container-no-selection-logo" />
        <p className="pokemon-information-container-no-selection-text">
           CHOOSE A POKEMON
        </p>
    </div>
)
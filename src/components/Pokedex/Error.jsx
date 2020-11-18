import React from 'react';
import pokeball from '../../assets/pokeBall.png';
export const Error = () => (
    <div className="pokemon-information-container-error">
        <img src={pokeball} alt="pokeball" className="pokemon-information-container-no-selection-logo" />
        <p className="pokemon-information-container-error-error-text">
           Oops!, something went wrong, please, try again later.
        </p>
    </div>
)
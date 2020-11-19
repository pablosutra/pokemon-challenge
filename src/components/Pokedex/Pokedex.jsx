import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { NoSelection } from './NoSelection';
import { BASE_API_URL, ENDPOINTS } from '../../constants';
import { Pokemon } from './Pokemon';
import { Error } from './Error';
import { Loader } from '../Loader';
import axios from 'axios';
import './Pokedex.scss';

export const Pokedex = () => {
  const { pokemon } = useParams();
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorLoading, setErrorLoading] = useState(false);
  useEffect(() => {
    const pokemonEndpoint = ENDPOINTS.detail(pokemon);
    setIsLoading(true);
    setErrorLoading(false);
    axios
      .get(`${BASE_API_URL}${pokemonEndpoint}`)
      .then((response) => setSelectedPokemon(response.data))
      .catch(() => {
        setErrorLoading(true);
        setSelectedPokemon(null);
      })
      .finally(() => setIsLoading(false));
  }, [pokemon]);

  return (
    <div className="pokemon-information-container" id="page-wrap">
      {!pokemon && !errorLoading && <NoSelection />}
      {selectedPokemon && !isLoading && <Pokemon pokemon={selectedPokemon} />}
      {isLoading && <Loader />}
      {errorLoading && <Error />}
    </div>
  );
};

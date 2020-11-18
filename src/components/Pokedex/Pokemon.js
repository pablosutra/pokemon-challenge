import React from 'react';
import {object} from 'prop-types';
import './Pokedex.scss'
import _replace from 'lodash/replace';
import _capitalize from 'lodash/capitalize'
export const Pokemon = ({pokemon}) => (
<div className="pokemon-detail">
    <section className="pokemon-detail-id">
    <div className="pokemon-detail-id-thumb">
    <img src={`http://pokepedia.pro/imagenes/pokemon/${pokemon.name}.png`} alt={pokemon.name}/>
    </div>
    {pokemon.types && (
        <div className="pokemon-detail-id-types">
            {pokemon.types.map(({type}) => (
                <p className={`pokemon-detail-id-types-${type.name}`} key={type.name}>{type.name}</p>
            ))}
        </div>
    )}
    <p className="pokemon-detail-id-name">{pokemon.name}</p>
    <p className="pokemon-detail-id-number">No. {pokemon.id}</p>
    </section>
    <section className="pokemon-detail-stats">
        <h1 className="pokemon-detail-stats-title">Stats</h1>
      {pokemon.stats.length && 
      pokemon.stats.map(({stat, base_stat}) =>{
        const statName = _capitalize(_replace(stat.name,'-',' '));
        return (
        <div className="pokemon-detail-stats-item">
            {statName}
            <span className="tag">{base_stat}</span>
        </div>
      )})}
    </section>
    <section className="pokemon-detail-moves">
        <h1 className="pokemon-detail-moves-title">Moves</h1>

      {pokemon.moves.length && (
      <div className="pokemon-detail-moves-items">
          {
              pokemon.moves.map(({move}) =>{
                const statName = _capitalize(_replace(move.name,'-',' '));
                return (
                <div className="pokemon-detail-moves-items-item">
                    {statName}
                </div>
              )})
          }
      </div>
      )}
    </section>
</div>
)

Pokemon.propTypes = {
    pokemon: object.isRequired
}

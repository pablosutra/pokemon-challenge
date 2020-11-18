import React from 'react';
import {useParams} from 'react-router-dom';
import _isEmpty from 'lodash/isEmpty'
import { NoSelection } from './NoSelection';
import './Pokedex.scss'

export const Pokedex = () =>{ 
const params = useParams();


return (
<div className="pokemon-information-container" id="page-wrap">
   {_isEmpty(params) && (<NoSelection />)}
</div>
)}
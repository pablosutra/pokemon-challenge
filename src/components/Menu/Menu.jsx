import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom'
import OffCanvas from 'react-aria-offcanvas'
import './Menu.scss'
import pokeBall from '../../assets/pokeBall.png'
import axios from 'axios';
import _padStart from 'lodash/padStart'
import {BASE_API_URL, ENDPOINTS} from '../../constants'

const burgerStyles = {
    overlay: {
        width: '15%' 
    },
    content: {
        width: '15%',
        height: '100%',
    }
}

export const Menu = () => {
    const [pokemonList, setPokemonList] = useState([]);
    useEffect(()=> {
        axios.get(`${BASE_API_URL}${ENDPOINTS.list}`)
        .then((response)=>setPokemonList(response.data.results))
    },[])

    return (
    <OffCanvas 
    isOpen
    lockBodyAfterOpen={false}
    style={burgerStyles}
    >
        <div className="burger-menu-title">
            <img src={pokeBall}  alt="Poke Ball" className="burger-menu-title-logo"/>
            <p className="burger-menu-title-description">Pokédex</p>
        </div>
        <div className="burger-menu-list">
            {pokemonList.length && 
                pokemonList.map(({name}, idx)=>(
                 <div className="burger-menu-list-item" key={idx}>
                     <div className="burger-menu-list-item-number">{_padStart((idx+1),3,'0')}</div>
                     <Link className="burger-menu-list-item-name" to={`/pokedex/${name}`}>{name}</Link>
                 </div>
                ))
             }   
            
        </div>
    </OffCanvas>
)}
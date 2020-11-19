import React, {useEffect, useState, Fragment} from 'react';
import {useHistory} from 'react-router-dom'
import OffCanvas from 'react-aria-offcanvas'
import './Menu.scss'
import pokeBall from '../../assets/pokeBall.png'
import axios from 'axios';
import _padStart from 'lodash/padStart'
import {BASE_API_URL, ENDPOINTS} from '../../constants'
import {useIsMobile} from '../../helpers'

const burgerStyles = {
    overlay: {
        width: '15%',
    },
    content: {
        width: '15%',
        height: '100%',
    }
}

export const Menu = () => {
    const {isMobile} = useIsMobile();
    console.log(isMobile)
    const [pokemonList, setPokemonList] = useState([]);
    const [isOpen, setIsOpen] = useState(!isMobile)
    const [styles, setStyles] = useState(burgerStyles);

    const history = useHistory();
    
    useEffect(()=> {
        axios.get(`${BASE_API_URL}${ENDPOINTS.list}`)
        .then((response)=>setPokemonList(response.data.results))
    },[])

    useEffect(()=>{
        setIsOpen(!isMobile)
        if(isMobile){
            setStyles({
                overlay: {
                    width: '50%'
                },
                content: {
                    width: '50%',
                    height: '100%',
                }
            })
        }else{
            setStyles(burgerStyles)
        }
    },[isMobile])

    const _openPokemon = (name) =>{
        history.push(`/pokedex/${name}`);
        if(isMobile){
            setIsOpen(false);
        }
    }

    return (
    <Fragment>
        {!isOpen && (
            <button
          className="menu-button"
          aria-expanded={isOpen}
          onClick={()=> setIsOpen(true)}
        >
        <i className="fa fa-bars fa-2x"/>
        </button>
        )}
        <OffCanvas 
    isOpen={isOpen}
    overlayClassName="canvas-overlay"
    lockBodyAfterOpen={false}
    style={styles}
    >
        <div className="burger-menu-title">
        {isMobile && (
        <button
        className="menu-button"
        onClick={()=> setIsOpen(false)}
      >
       <i className="fa fa-times fa-2x"/>
      </button>
        )}

            <img src={pokeBall}  alt="Poke Ball" className="burger-menu-title-logo"/>
            <p className="burger-menu-title-description">Pokédex</p>
        </div>
        <div className="burger-menu-list">
            {pokemonList.length && 
                pokemonList.map(({name}, idx)=>(
                 <div className="burger-menu-list-item" key={idx}>
                     <div className="burger-menu-list-item-number">{_padStart((idx+1),3,'0')}</div>
                     <button className="burger-menu-list-item-name" onClick={()=>_openPokemon(name)}>{name}</button>
                 </div>
                ))
             }   
            
        </div>
    </OffCanvas>
    </Fragment>
   
)}
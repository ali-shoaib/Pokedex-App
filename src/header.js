import React from 'react';
import './App.css';
import pokedex from './images/pokedex.png';
import pikachu from './images/pikachu.png';
import {Link} from 'react-router-dom';

const Header = () => {
    return(
        <div>
            <header>
            <img src={pokedex} className='pokedex' alt="logo"/>
            <img src={pikachu} className="pikachu" alt='pikachu'/>
            </header>
            <nav>
                <Link to="about" >About</Link>
                <Link to="pokemonlist" >Pokemon List</Link>
                <Link to='/' >Home</Link>
            </nav>
        </div>
    )
}

export default Header;
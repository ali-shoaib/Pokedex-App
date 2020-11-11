import React from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import pokemon from './images/pokemon.png';
import {Link} from 'react-router-dom';

const Home = () => {
    
    return(
        <div>
        <img src={pokemon} className='pok' alt="home" /><br/>
        <Link to="pokemonlist">
        <Button variant='contained' 
        color="secondary"
        size="large"
        style={{
            fontSize: 20,
        }}
        >
            Goto Pokemonlist
        </Button>
        </Link>
        </div>
    )
}

export default Home;
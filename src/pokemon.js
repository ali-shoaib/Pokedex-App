import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import PokemonList from './pokemonList';
import Pagination from './pagination';

function Pokemon() {
  const [pokemon, setPokemon] = useState([]);
  const [currentPageUrl, setCurrentPageUrl] = useState('http://pokeapi.co/api/v2/pokemon');
  const [NextPageUrl, setNextPageUrl] = useState()
  const [PrevPageUrl, setPrevPageUrl] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let cancel
    setLoading(true)
    axios(currentPageUrl, {
      cancelToken: new axios.CancelToken(c => cancel = c)
    }).then(res => {
      setLoading(false)
      setNextPageUrl(res.data.next)
      setPrevPageUrl(res.data.previous)
      setPokemon(res.data.results.map(pokdata => pokdata.name));
    })
    return () => cancel(); 
  },[currentPageUrl])

  const gotoNextPage = () => {
    setCurrentPageUrl(NextPageUrl);
  }

  const gotoPrevPage = () => {
    setCurrentPageUrl(PrevPageUrl);
  }
  
  if(loading === true) return <div className="loader"></div>

  return (
    <div>
      <Pagination 
      gotoNextPage={NextPageUrl ? gotoNextPage : null}
      gotoPrevPage={PrevPageUrl ? gotoPrevPage : null}
      />
      <PokemonList pokemon={pokemon} />
    </div>
  );
}

export default Pokemon;

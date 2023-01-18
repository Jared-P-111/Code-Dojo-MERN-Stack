import React, { useState } from 'react';
import Card from './components/Card';
import axios from 'axios';
import './bootstrap.css';
import './styles.css';

const App = () => {
  const [pokemon, setPokemon] = useState(null);

  const fetchPokemon = () => {
    axios
      .get('https://pokeapi.co/api/v2/pokemon/')
      .then((response) => {
        console.log(response.data.results);
        setPokemon(response.data.results);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <button className="btn info" onClick={fetchPokemon}>
        Get Pokemon
      </button>
      <div class="container">
        {pokemon &&
          pokemon.map((pokemon, idx) => {
            return <Card key={idx} pokemon={pokemon} />;
          })}
      </div>
    </>
  );
};

export default App;

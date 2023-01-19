import React from 'react';
import obiWan from '../images/obiwan-04.png';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function CharacterSingle() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/people/${id}`)
      .then((res) => {
        console.log(res.data);
        setCharacter(res.data);
      })
      .catch((err) => {
        setError(true);
      });
  }, [id]);

  return (
    <div className="card">
      {!error && character ? (
        <div className="card-body">
          <h1>Name: {character.name}</h1>
        </div>
      ) : (
        <div className="card-body">
          <h1>Obi-Wan says...</h1>
          <img src={obiWan} alt="person" className="img-fluid" />
          <h3 className="mt-4">These are not the drones you are looking for...</h3>
        </div>
      )}
    </div>
  );
}

export default CharacterSingle;

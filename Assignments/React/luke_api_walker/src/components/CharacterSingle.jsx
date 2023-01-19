import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function CharacterSingle() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/people/${id}`)
      .then((res) => {
        console.log(res.data);
        setCharacter(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className="card">
      {character && (
        <div className="card-body">
          <h1>Name: {character.name}</h1>
        </div>
      )}
    </div>
  );
}

export default CharacterSingle;

import React from 'react';

const Card = (props) => {
  const { name, age, hair } = props;

  return (
    <div>
      <h1>Name: {name}</h1>
      <p>Age: {age}</p>
      <p>Hair Color: {hair}</p>
    </div>
  );
};

export default Card;

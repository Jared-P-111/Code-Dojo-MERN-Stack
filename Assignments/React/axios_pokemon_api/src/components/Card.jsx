import React from 'react';

const Card = ({ pokemon }) => {
  return (
    <>
      <div className="card mb-3">
        <h3 className="card-header">{pokemon.name}</h3>
        <div className="card-body">
          <p className="card-text">
            Some quick example text to build on the card title and make up the bulk of the card's
            content.
          </p>
        </div>
        <div className="card-body"></div>
      </div>
    </>
  );
};

export default Card;

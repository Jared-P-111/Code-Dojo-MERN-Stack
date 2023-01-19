import React from 'react';
import { Outlet } from 'react-router-dom';

const Characters = () => {
  return (
    <div className="card">
      <div className="card-body">
        <h1>Characters</h1>
        <Outlet />
      </div>
    </div>
  );
};

export default Characters;

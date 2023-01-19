import React from 'react';
import { Outlet } from 'react-router-dom';
import Form from './Form';

const WalkersAPI = () => {
  return (
    <>
      <Form />
      <Outlet /> {/*<--- Child of Characters <CharacterSingle /> */}
    </>
  );
};

export default WalkersAPI;

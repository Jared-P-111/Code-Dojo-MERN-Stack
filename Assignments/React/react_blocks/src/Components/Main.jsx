import React from 'react';
import styled from 'styled-components';
import SubContent from './SubContents';
import Advertisement from './Advertisement';

const StyledMain = styled.div`
  background-color: #e06666;
  grid-area: 'main';
  display: grid;
  grid-template-rows: 70% 30%;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 30px;
  grid-template-areas:
    'subcontent subcontent subcontent'
    'advertisement advertisement advertisement';
  padding: 30px;

  /* & :nth-child(2) {
    margin: 0px 30px;
  } */
`;

const Main = () => {
  return (
    <StyledMain>
      <SubContent />
      <SubContent />
      <SubContent />
      <Advertisement />
    </StyledMain>
  );
};

export default Main;

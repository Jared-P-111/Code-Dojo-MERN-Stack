import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.div`
  grid-area: header;
  background-color: #6aa84f;
  max-width: calc(100vw - 60px);
  margin-bottom: 30px;
  padding: 30px;
`;

const Header = () => {
  return <StyledHeader>Header</StyledHeader>;
};

export default Header;

import React from 'react';
import styled from 'styled-components';

const StyledAdvertisement = styled.div`
  grid-area: advertisement;
  background-color: #b4a7d6;
  margin-top: 30px;
  padding: 30px;
`;

const Advertisement = () => {
  return <StyledAdvertisement>Advertisement</StyledAdvertisement>;
};

export default Advertisement;

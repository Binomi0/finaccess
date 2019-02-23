import React from 'react';
import { StyledSerie } from '../styles/series';

const Serie = ({ serie }) => {
  const { resourceURI, name } = serie;
  return <StyledSerie key={resourceURI}>{name}</StyledSerie>;
};

export default Serie;

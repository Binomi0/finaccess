import React from 'react';
import { StyledStorie } from '../styles/stories';

const Storie = ({ storie }) => {
  const { resourceURI, name } = storie;
  return (
    <StyledStorie>
      <p key={resourceURI}>{name}</p>
    </StyledStorie>
  );
};

export default Storie;

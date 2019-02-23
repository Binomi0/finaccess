import React from 'react';
import { StyledComic } from '../styles/comics';

const Comic = ({ comic }) => {
  const { resourceURI, name } = comic;
  return (
    <StyledComic>
      <p key={resourceURI}>{name}</p>
    </StyledComic>
  );
};

export default Comic;

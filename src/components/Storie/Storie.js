import React, { useState } from 'react';
import MarvelAPI from '../../api';

import { StyledStorie } from '../styles/stories';

const Storie = ({ storie: defaultStorie }) => {
  const [storie, setStorie] = useState(defaultStorie);
  const getStorie = async () => {
    await MarvelAPI.stories.getStorie(this.state.resourceURI);
    setStorie({ ...storie });
  };

  const { resourceURI, name } = storie;
  return (
    <StyledStorie onClick={getStorie}>
      <p key={resourceURI}>{name}</p>
    </StyledStorie>
  );
};

export default Storie;

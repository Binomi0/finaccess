import React from 'react';
import PropTypes from 'prop-types';
import { StyledCharacterHeader } from '../styles/character';

const CharacterHeader = ({
  thumbnail: { path, extension },
  name,
  description,
}) => (
  <StyledCharacterHeader>
    <img src={`${path}.${extension}`} alt="character" />
    <h4>Nombre: {name}</h4>
    <p>
      Descripción:{' '}
      {description
        ? description
        : 'Ups! Parece que no he encontrado una descripción...'}
    </p>
  </StyledCharacterHeader>
);

CharacterHeader.propTypes = {
  thumbnail: PropTypes.shape({
    extension: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
  }).isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default CharacterHeader;

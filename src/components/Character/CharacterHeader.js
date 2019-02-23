import React from 'react';
import PropTypes from 'prop-types';
import { Header } from '../styles/character';

const CharacterHeader = ({
  thumbnail: { path, extension },
  name,
  description,
}) => (
  <Header>
    <img src={`${path}.${extension}`} alt="character" />
    <h4>Nombre: {name}</h4>
    <p>
      Descripción:{' '}
      {description
        ? description
        : 'Ups! Parece que no he encontrado una descripción...'}
    </p>
  </Header>
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

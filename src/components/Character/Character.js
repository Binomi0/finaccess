import React from 'react';
import PropTypes from 'prop-types';
import Comics from '../Comics';
import Series from '../Series';
import Stories from '../Stories';
import CharacterHeader from './CharacterHeader';
import { StyledCharacter, Content } from '../styles/character';

const Character = ({ selected, handleClick, idx, character }) => {
  const { comics, stories, series, name, description, thumbnail } = character;
  return (
    <StyledCharacter onClick={() => handleClick(idx)} selected={selected}>
      <CharacterHeader
        thumbnail={thumbnail}
        name={name}
        description={description}
      />
      <Content>
        <Comics comics={comics} />
        <Stories stories={stories} />
        <Series series={series} />
      </Content>
    </StyledCharacter>
  );
};

Character.propTypes = {
  character: PropTypes.shape({
    comics: PropTypes.object.isRequired,
    stories: PropTypes.object.isRequired,
    series: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    thumbnail: PropTypes.object.isRequired,
  }).isRequired,
  handleClick: PropTypes.func.isRequired,
  idx: PropTypes.number.isRequired,
  selected: PropTypes.bool.isRequired,
};

export default Character;

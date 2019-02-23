import React from 'react';
import PropTypes from 'prop-types';
import Storie from '../Storie';
import { StyledStories } from '../styles/stories';

const Stories = ({ stories }) => {
  return (
    <StyledStories>
      <h4>Stories</h4>
      {stories.items.map(
        (storie, index) =>
          index <= 2 && <Storie key={storie.resourceURI} storie={storie} />,
      )}
    </StyledStories>
  );
};

Stories.propTypes = {
  stories: PropTypes.shape({
    items: PropTypes.array.isRequired,
  }).isRequired,
};

export default Stories;

import React from 'react';
import PropTypes from 'prop-types';
import Storie from '../Storie';
import { StyledStories } from '../styles/stories';

const Stories = ({ stories }) => {
  return (
    <StyledStories>
      <h4>Stories</h4>
      {stories.items.map((storie, index) => {
        if (index <= 2) {
          return <Storie key={storie.resourceURI} storie={storie} />;
        }
        return null;
      })}
    </StyledStories>
  );
};

Stories.propTypes = {
  stories: PropTypes.object.isRequired,
};

export default Stories;

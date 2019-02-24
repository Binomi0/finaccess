import React from 'react';
import PropTypes from 'prop-types';
import Comic from '../Comic';
import { StyledComics } from '../styles/comics';

const Comics = ({ comics }) => (
  <StyledComics>
    <h4>Comics</h4>
    {comics.items.map(
      (comic, index) =>
        index <= 2 && <Comic key={comic.resourceURI} comic={comic} />,
    )}
  </StyledComics>
);

Comics.propTypes = {
  comics: PropTypes.shape({
    items: PropTypes.array.isRequired,
  }).isRequired,
};

export default Comics;

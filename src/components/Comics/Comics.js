import React from 'react';
import PropTypes from 'prop-types';
import Comic from '../Comic';
import { StyledComic } from '../styles/comics';

const Comics = ({ comics }) => {
  return (
    <StyledComic>
      <h4>Comics</h4>
      {comics.items.map((comic, index) => {
        if (index <= 2) {
          return <Comic key={comic.resourceURI} comic={comic} />;
        }
        return null;
      })}
    </StyledComic>
  );
};

Comics.propTypes = {
  comics: PropTypes.object.isRequired,
};

export default Comics;

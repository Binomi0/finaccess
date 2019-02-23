import React from 'react';
import PropTypes from 'prop-types';
import Serie from '../Serie';
import { StyledSerie } from '../styles/series';

const Series = ({ series }) => {
  return (
    <StyledSerie>
      <h4>Series</h4>
      {series.items.length &&
        series.items.map((serie, index) => {
          if (index <= 2) {
            return <Serie key={serie.resourceURI} serie={serie} />;
          }
          return null;
        })}
    </StyledSerie>
  );
};

Series.propTypes = {
  series: PropTypes.object.isRequired,
};

export default Series;

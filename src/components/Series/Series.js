import React from 'react';
import PropTypes from 'prop-types';
import Serie from '../Serie';
import { StyledSeries } from '../styles/series';

const Series = ({ series }) => {
  return (
    <StyledSeries>
      <h4>Series</h4>
      {series.items.length &&
        series.items.map((serie, index) => {
          if (index <= 2) {
            return <Serie key={serie.resourceURI} serie={serie} />;
          }
          return null;
        })}
    </StyledSeries>
  );
};

Series.propTypes = {
  series: PropTypes.object.isRequired,
};

export default Series;

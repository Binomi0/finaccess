import React from 'react';
import PropTypes from 'prop-types';
import Serie from '../Serie';
import { StyledSeries } from '../styles/series';

const Series = ({ series }) => (
  <StyledSeries>
    <h4>Series</h4>
    {series.items.map(
      (serie, index) =>
        index <= 2 && <Serie key={serie.resourceURI} serie={serie} />,
    )}
  </StyledSeries>
);

Series.propTypes = {
  series: PropTypes.shape({
    items: PropTypes.array.isRequired,
  }).isRequired,
};

export default Series;

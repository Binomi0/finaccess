import React, { Component } from 'react';
import Serie from '../Serie';
import { StyledSerie } from '../styles/series';

class Series extends Component {
  render() {
    const { series } = this.props;
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
  }
}

export default Series;

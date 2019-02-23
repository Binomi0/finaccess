import React, { Component } from 'react';
import styled from 'styled-components';

import Serie from '../Serie';

const StyledSerie = styled.div`
  width: 100%;

  h4 {
    line-height: 0.9rem;
  }

  p {
    font-size: 0.5rem;
  }
`;

export default class Series extends Component {
  render() {
    const { series } = this.props;
    console.log('Series =>', series);
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

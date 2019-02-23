import React, { Component } from 'react';
import styled from 'styled-components';

import Storie from '../Storie';

const StyledStories = styled.div`
  width: 100%;

  h4 {
    line-height: 0.9rem;
  }

  p {
    font-size: 0.5rem;
  }
`;

export default class Stories extends Component {
  render() {
    const { stories } = this.props;
    console.log('Stories =>', stories);
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
  }
}

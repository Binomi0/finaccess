import React, { Component } from 'react';
import styled from 'styled-components';
import Skeleton from 'react-loading-skeleton';

import Storie from '../Storie';

const StyledStories = styled.div`
  width: 100%;
`;

export default class Stories extends Component {
  render() {
    const { stories } = this.props;
    const storie = stories.map((storie, index) => {
      if (index <= 2) {
        return <Storie key={storie.resourceURI} storie={storie} />;
      }
      return null;
    });
    // console.log('Stories =>', stories);
    return (
      <StyledStories>
        <h4>Stories</h4>
        {storie || <Skeleton count={3} />}
      </StyledStories>
    );
  }
}

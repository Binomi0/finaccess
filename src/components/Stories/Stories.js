import React, { Component } from 'react';
import Storie from '../Storie';
import { StyledStories } from '../styles/stories';

export default class Stories extends Component {
  render() {
    const { stories } = this.props;
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

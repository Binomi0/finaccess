import React, { Component } from 'react';
import styled from 'styled-components';

import { getStorie } from '../../api/stories';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const StyledStorie = styled.div`
  width: 100%;
`;

class Storie extends Component {
  state = {
    ...this.props.storie,
  };

  componentDidMount() {
    // this.getStorie();
  }

  getStorie = () => {
    getStorie(this.state.resourceURI).then((storie) => {
      this.setState({ ...storie });
    });
  };

  render() {
    const {
      storie: { resourceURI, name },
    } = this.props;
    return (
      <StyledStorie>
        <p key={resourceURI}>{name}</p>
      </StyledStorie>
    );
  }
}

export default Storie;

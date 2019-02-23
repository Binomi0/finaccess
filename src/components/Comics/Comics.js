import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Comic from '../Comic';
import { getComics } from '../../api/comics';

const StyledComic = styled.div`
  width: 100%;
`;

class ComicsView extends React.Component {
  state = {
    comics: this.props.comics,
  };
  componentDidMount() {
    // this.getComics();
  }

  getComics = () => {
    getComics(this.props.comics.collectionURI).then((data) => {
      // console.log('getComics Data =>', data);
    });
  };

  render() {
    const { comics } = this.state;
    // console.log('Comics =>', comics);
    return (
      <StyledComic>
        <h4>Comics</h4>
        {comics.map((comic, index) => {
          if (index <= 2) {
            return <Comic key={comic.resourceURI} comic={comic} />;
          }
          return null;
        })}
      </StyledComic>
    );
  }
}

ComicsView.propTypes = {
  comics: PropTypes.array.isRequired,
};

export default ComicsView;

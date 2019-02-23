import React from 'react';
import PropTypes from 'prop-types';

import Comic from '../Comic';
import Api from '../../api';

import { StyledComic } from '../styles/comics';

class ComicsView extends React.Component {
  state = {
    comics: this.props.comics,
  };
  componentDidMount() {
    // this.getComics();
  }

  getComics = async () => {
    const comic = await Api.getComics(this.props.comics.collectionURI);
    this.setState({ ...comic });
  };

  render() {
    const { comics } = this.state;
    return (
      <StyledComic>
        <h4>Comics</h4>
        {comics.items.map((comic, index) => {
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

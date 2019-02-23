import React, { Component } from 'react';
import MarvelAPI from '../../api';

export default class Comic extends Component {
  state = {
    ...this.props.comic,
  };

  componentDidMount() {
    // this.getComic();
  }

  getComic = () => {
    MarvelAPI.comics.getComic(this.state.resourceURI).then((comic) => {
      this.setState({ ...comic });
    });
  };

  render() {
    const { resourceURI, name } = this.state;
    return <p key={resourceURI}>{name}</p>;
  }
}

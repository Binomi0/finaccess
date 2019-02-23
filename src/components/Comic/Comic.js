import React, { Component } from 'react';
import { getComic } from '../../api/comics';

export default class Comic extends Component {
  state = {
    ...this.props.comic,
  };

  componentDidMount() {
    // this.getComic();
  }

  getComic = () => {
    getComic(this.state.resourceURI).then((comic) => {
      this.setState({ ...comic });
    });
  };

  render() {
    const { resourceURI, name } = this.state;
    console.log('[Comic] this.state =>', this.state);
    return (
      <div>
        <p key={resourceURI}>{name}</p>
      </div>
    );
  }
}

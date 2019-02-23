import React, { Component } from 'react';
import MarvelAPI from '../../api';

class Serie extends Component {
  state = {
    ...this.props.serie,
  };

  componentDidMount() {
    // this.getSerie();
  }

  getSerie = () => {
    MarvelAPI.series.getSerie(this.state.resourceURI).then((serie) => {
      this.setState({ ...serie });
    });
  };

  render() {
    const { resourceURI, name } = this.state;
    return <p key={resourceURI}>{name}</p>;
  }
}

export default Serie;

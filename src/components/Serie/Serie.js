import React, { Component } from 'react';
import { getSerie } from '../../api/series';

class Serie extends Component {
  state = {
    ...this.props.serie,
  };

  componentDidMount() {
    // this.getSerie();
  }

  getSerie = () => {
    getSerie(this.state.resourceURI).then((serie) => {
      this.setState({ ...serie });
    });
  };

  render() {
    const { resourceURI, name } = this.state;
    return (
      <div>
        <p key={resourceURI}>{name}</p>
      </div>
    );
  }
}

export default Serie;

import React from 'react';
import MarvelAPI from '../../api';

const Serie = ({ serie: defaultSerie }) => {
  const [serie, setSerie] = React.useState(defaultSerie);

  const getSerie = async () => {
    const serie = await MarvelAPI.series.getSerie(this.state.resourceURI);
    setSerie(serie);
  };

  const { resourceURI, name } = serie;
  return (
    <p onClick={getSerie} key={resourceURI}>
      {name}
    </p>
  );
};

export default Serie;

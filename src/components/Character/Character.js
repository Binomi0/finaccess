import React from 'react';
import PropTypes from 'prop-types';
import { StyledCharacter, Header, Content } from './styles';
import Comics from '../Comics';
import Series from '../Series';
import Stories from '../Stories';

class Character extends React.Component {
  state = {
    ...this.props.character,
  };

  render() {
    const { selected, handleClick, idx } = this.props;

    const {
      comics,
      stories,
      series,
      name,
      description,
      thumbnail: { path, extension },
    } = this.state;

    const characterImg = `${path}.${extension}`;
    // console.log('this.state =>', this.state);

    return (
      <StyledCharacter onClick={() => handleClick(idx)} selected={selected}>
        <Header>
          <img src={characterImg} alt="character" />
          <h4>Nombre: {name}</h4>
          <p>
            Descripción:{' '}
            {description
              ? description
              : 'Ups! Parece que no he encontrado una descripción...'}
          </p>
        </Header>
        <Content>
          <Comics comics={comics.items} />
          <Stories stories={stories[0].items} />
          <Series series={series.items} />
        </Content>
      </StyledCharacter>
    );
  }
}

Character.propTypes = {
  character: PropTypes.shape({
    comics: PropTypes.object.isRequired,
  }).isRequired,
};

export default Character;

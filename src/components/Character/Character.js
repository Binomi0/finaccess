import React from 'react';
import PropTypes from 'prop-types';
import { StyledCharacter, Header, Content } from '../styles/character';
import Comics from '../Comics';
import Series from '../Series';
import Stories from '../Stories';

class Character extends React.Component {
  state = {
    ...this.props.character,
    selected: null,
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.selected !== this.state.selected) {
      this.setState({ selected: nextProps.selected });
    }
  }

  render() {
    const { handleClick, idx } = this.props;
    const {
      comics,
      stories,
      series,
      name,
      selected,
      description,
      thumbnail: { path, extension },
    } = this.state;
    const characterImg = `${path}.${extension}`;

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
          <Comics comics={comics} />
          <Stories stories={stories} />
          <Series series={series} />
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

import React, { Component } from 'react';
import Skeleton from 'react-loading-skeleton';

import Character from '../../../components/Character';
import { getCharacters } from '../../../api/characters';
import { CharacterContainer } from '../styles/styles';

class SearchView extends Component {
  state = {
    characters: [],
    selectedIndex: 0,
  };

  componentDidMount() {
    this.getCharacters();
  }

  handleClick = (selectedIndex) => {
    this.setState({ selectedIndex });
  };

  getCharacters = async () => {
    const characters = await getCharacters();
    this.setState({ characters });
  };

  render() {
    const { characters, selectedIndex } = this.state;
    const character = characters.map((character, idx) => (
      <Character
        key={character.id}
        character={character}
        handleClick={this.handleClick}
        selected={selectedIndex === idx}
        idx={idx}
      />
    ));

    return (
      <CharacterContainer active={characters.length && 1}>
        {character}
      </CharacterContainer>
    );
  }
}

export default SearchView;

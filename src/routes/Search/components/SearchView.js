import React, { Component } from 'react';

import SearchHeroes from '../../../components/SearchHeroes';
import Character from '../../../components/Character';
import MarvelAPI from '../../../api';
import { CharacterContainer, CharacterTitle } from '../styles/styles';

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

  handleChange = ({ target: { value: character } }) => {
    this.getCharacters(character);
  };

  getCharacters = async (character) => {
    const characters = await MarvelAPI.characters.getCharacters(character);
    this.setState({ characters });
  };

  render() {
    const { characters, selectedIndex } = this.state;
    return (
      <div>
        <CharacterTitle>Buscador de Heroes de Marvel</CharacterTitle>
        <SearchHeroes handleChange={this.handleChange} />
        <CharacterContainer active={characters.length && 1}>
          {characters.map((character, idx) => (
            <Character
              key={character.id}
              character={character}
              handleClick={this.handleClick}
              selected={selectedIndex === idx}
              idx={idx}
            />
          ))}
        </CharacterContainer>
      </div>
    );
  }
}

export default SearchView;

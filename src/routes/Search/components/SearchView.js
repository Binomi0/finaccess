import React, { useState, useEffect } from 'react';

import SearchHeroes from '../../../components/SearchHeroes';
import Character from '../../../components/Character';
import MarvelAPI from '../../../api';
import { CharacterContainer, CharacterTitle } from '../styles/styles';

const SearchView = () => {
  const [characters, setCharacter] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleClick = (selectedIndex) => {
    setSelectedIndex(selectedIndex);
  };

  useEffect(() => {
    getCharacters();
  }, [characters])

  const handleChange = (character) => {
    getCharacters(character);
  };

  const getCharacters = async (newCharacter) => {
    const character = await MarvelAPI.characters.getCharacters(newCharacter);
    setCharacter(character);
  };


  return (
    <div>
      <CharacterTitle>Buscador de Heroes de Marvel</CharacterTitle>
      <SearchHeroes handleChange={handleChange} />
      <CharacterContainer active={characters.length && 1}>
        {characters.map((character, idx) => (
          <Character
            key={character.id}
            character={character}
            handleClick={handleClick}
            selected={selectedIndex === idx}
            idx={idx}
          />
        ))}
      </CharacterContainer>
    </div>
  );
}

export default SearchView;

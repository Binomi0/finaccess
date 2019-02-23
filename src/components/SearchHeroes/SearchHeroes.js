import React, { useState } from 'react';
import { SearchHeroesContainer, InputHeroes } from '../styles/searchHeroes';

const SearchHeroes = ({ handleChange }) => {
  const [name, setName] = useState('');

  return (
    <SearchHeroesContainer>
      <InputHeroes
        type="text"
        name="heroe"
        value={name}
        onChange={({ target }) => setName(target.value)}
        onBlur={handleChange}
      />
    </SearchHeroesContainer>
  );
};

export default SearchHeroes;

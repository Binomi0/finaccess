import React, { useState } from 'react';
import {
  SearchHeroesContainer,
  InputHeroes,
  SearchButton,
} from '../styles/searchHeroes';

const SearchHeroes = ({ handleChange }) => {
  const [name, setName] = useState('Thor');

  return (
    <SearchHeroesContainer>
      <InputHeroes
        name="heroe"
        type="text"
        value={name}
        onChange={({ target }) => setName(target.value)}
      />
      <SearchButton onClick={() => handleChange(name)}>
        <span role="img" aria-label="magnifier">
          🔍
        </span>
      </SearchButton>
    </SearchHeroesContainer>
  );
};

export default SearchHeroes;

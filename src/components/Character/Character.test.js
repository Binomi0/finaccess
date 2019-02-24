import React from 'react';
import Character from './Character';
import MarvelApi from '../../api';
import { mount } from '../../config/enzyme';
import { StyledCharacter } from '../styles/character';

describe('Character', () => {
  let character;
  beforeAll(async () => {
    character = await MarvelApi.characters.getCharacters('Thor');
  });

  it('renders a character model', () => {
    const handleClick = jest.fn();
    const idx = 1;
    const selected = true;
    const MockedCharacter = mount(
      <Character
        character={character[0]}
        handleClick={handleClick}
        idx={idx}
        selected={selected}
      />,
    );

    MockedCharacter.find(StyledCharacter).simulate('click');

    expect(handleClick).toHaveBeenCalled();
  });
});

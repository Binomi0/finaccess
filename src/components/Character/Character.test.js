import React from 'react';
import Character from './Character';
import MarvelApi from '../../api';
import renderer from 'react-test-renderer';

describe('Character', () => {
  let character;
  beforeAll(async () => {
    character = await MarvelApi.characters.getCharacters('Thor');
  });
  it('renders a character model', () => {
    const handleClick = jest.fn();
    const idx = 1;
    const selected = true;
    const tree = renderer
      .create(
        <Character
          character={character[0]}
          handleClick={handleClick}
          idx={idx}
          selected={selected}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

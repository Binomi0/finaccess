import React from 'react';
import SearchView from './SearchView';
import MarvelApi from '../../../api';
import { mount } from '../../../config/enzyme';

describe('SearchView', () => {
  let character;

  beforeAll(async () => {
    character = await MarvelApi.characters.getCharacters('Thor');
  });

  it('renders SearchView Page', () => {
    if (character.length) {
      const MockedSearchView = mount(<SearchView />);

      expect(character).toHaveLength(3);
      expect(MockedSearchView.html()).toMatchSnapshot();
    } else {
      expect(character).toHaveLength(0);
    }
  });
});

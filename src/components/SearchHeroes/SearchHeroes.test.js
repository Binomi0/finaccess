import React from 'react';
import { mount } from '../../config/enzyme';
import SearchHeroes from './SearchHeroes';

describe('SearchHeroes', () => {
  it('should renders without crashing', () => {
    const handleChange = jest.fn();
    const Search = mount(<SearchHeroes handleChange={handleChange} />);

    Search.find('button').simulate('click');
    Search.find('input').simulate('change');

    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(Search.html()).toMatchSnapshot();
  });
});

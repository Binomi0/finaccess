import React from 'react';
import SearchView from '../components/SearchView';
import MarvelApi from '../../../api';
import renderer from 'react-test-renderer';

describe('SearchView', () => {
  let character;

  let handleClick = jest.fn();

  beforeAll(async () => {
    character = await MarvelApi.characters.getCharacters('Thor');
  });
  it('renders SearchView Page', () => {
    const tree = renderer.create(<SearchView character={character} />);
    // console.log('tree =>', tree.toJSON().children[1].children[1].props.onClick);
    // console.log('tree =>', tree.toJSON().children[1].children[1]);
    // console.log('tree =>', tree.toJSON().children[1]);
    // console.log('tree =>', tree.toJSON());
    // console.log('typeof tree', tree);
    // const button = tree.root.find((element) => element.type === 'button');
    const button = tree.root.findByType('button');
    console.log('button =>', button.props);
    button.props.onClick();
    tree.update();
    // const root = tree.root;
    // const json = tree.toJSON();
    // const button = root.find((element) => element.type === 'button');
    // console.log('button =>', button);

    expect(handleClick).toHaveBeenCalled();
    expect(json).toMatchSnapshot();
  });
});

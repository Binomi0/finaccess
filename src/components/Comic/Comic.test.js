import React from 'react';
import ReactDOM from 'react-dom';
import Comic from './Comic';

describe('Comic', () => {
  it('should render Comic name', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Comic comic={{ comic: name }} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

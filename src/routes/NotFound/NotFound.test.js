import React from 'react';
import ReactDOM from 'react-dom';
import NotFound from './NotFound';

describe('Not Found', () => {
  it('should renders a 404 page', () => {
    const div = document.createElement('div');
    ReactDOM.render(<NotFound />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

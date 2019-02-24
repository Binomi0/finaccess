import React from 'react';
import { Router, Route, Switch } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';

import PageNotFound from '../routes/NotFound';
import SearchMarvelCharacterView from '../routes/Search';

const customHistory = createBrowserHistory();

// Maybe start loading some async data
const getDefaults = () => {};

const App = () => {
  return (
    <Router history={customHistory}>
      <Switch>
        <Route
          path="/"
          render={() => {
            getDefaults();
            return <SearchMarvelCharacterView />;
          }}
        />
        <Route path="*" component={PageNotFound} />
      </Switch>
    </Router>
  );
};

export default App;

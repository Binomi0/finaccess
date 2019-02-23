import React from 'react';
import { Router, Route, Switch } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';

// Public pages
import NotFound from '../../views/NotFound';
import Main from '../../../routes/Search';

const customHistory = createBrowserHistory();

const getDefaults = () => {};
const fetchCommonData = () => {
  getDefaults();
};

const App = () => {
  return (
    <Router history={customHistory}>
      <Switch>
        <Route
          path="/"
          render={() => {
            fetchCommonData();
            return <Main />;
          }}
        />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
};

export default App;

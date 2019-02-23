import React from 'react';
import { Router, Route, Switch } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';

// Public pages
import NotFound from '../../views/NotFound';
import Search from '../../../routes/Search';

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
          path="/search"
          render={() => {
            fetchCommonData();
            return <Search />;
          }}
        />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
};

export default App;

import React from 'react';
import { Route, Switch, IndexRoute } from 'react-router';

import App from './components/App';
import Main from './components/Main';
import Game from './components/Game';
import AppStateToProps from './components/AppStateToProps';

export default (
  <Switch>
  <Route path="/" component={AppStateToProps}>
    <IndexRoute component={App} />
      </Route>
    <Route path="/games" component={Game} />
  </Switch>
);

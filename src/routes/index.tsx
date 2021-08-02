import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Dashboard from '../screens/Dashboard';
import Home from '../screens/Home';

const Routes = () => (
  <Switch>
    <Route exact path="/login" />
    <Route exact path="/home" component={Home} />
    <Route exact path="/dashboard" component={Dashboard} />
    <Redirect exact to="/home" />
  </Switch>
);

export default Routes;

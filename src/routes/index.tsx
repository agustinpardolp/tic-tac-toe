import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Dashboard from '../screens/Dashboard';

const Routes = () => (
  <Switch>
    <Route exact path="/login" />
    <Route exact path="/dashboard" component={Dashboard} />
    <Redirect exact to="/dashboard" />
  </Switch>
);

export default Routes;

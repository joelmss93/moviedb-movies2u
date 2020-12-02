import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Landing from '../pages/Landing';
import MovieInfo from '../pages/MovieInfo';
import Login from '../pages/Login';

const routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Landing} />
    <Route path="/movie/:id" component={MovieInfo} />
    <Route path="/login" component={Login} />
  </Switch>
);

export default routes;

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Landing from '../pages/Landing';
import MovieInfo from '../pages/MovieInfo';

const routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Landing} />
    <Route path="/movie/:id" component={MovieInfo} />
  </Switch>
);

export default routes;

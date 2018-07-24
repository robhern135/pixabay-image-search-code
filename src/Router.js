import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import Error from './components/Error';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route
        path={`${process.env.PUBLIC_URL}/`}
        component={App}
        exact
      />
      {/* <Route
        path={`${process.env.PUBLIC_URL}/recipe/:id`}
        component={Recipe}
      /> */}
      <Route
        component={Error}
      />
    </Switch>
  </BrowserRouter>
)

export default Router;

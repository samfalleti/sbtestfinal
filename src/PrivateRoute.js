import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import auth from './context/auth';

function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest} // path="/Profile"
      render={() =>
        auth.isUserAuthenticated() ? <Component /> : <Redirect to="/login" />
      }
    />
  );
}

export default PrivateRoute;